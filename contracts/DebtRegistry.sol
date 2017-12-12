/*

  Copyright 2017 Dharma Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity 0.4.18;

import "./base/Ownable.sol";
import "./libraries/PermissionsLib.sol";


contract DebtRegistry is Ownable {
    using PermissionsLib for PermissionsLib.Permissions;

    struct Entry {
        string version;
        address creditor;
        address termsContract;
        string termsContractParameters;
    }

    mapping (bytes32 => Entry) public registry;
    PermissionsLib.Permissions internal entryInsertPermissions;
    PermissionsLib.Permissions internal entryEditPermissions;

    event LogInsertEntry(
        bytes32 indexed entryHash,
        address indexed creditor,
        address indexed termsContract,
        string termsContractParameters
    );

    event LogModifyEntryCreditor(
        bytes32 indexed entryHash,
        address indexed previousCreditor,
        address indexed newCreditor
    );

    event LogAddAuthorizedInsertAgent(
        address agent
    );

    event LogAddAuthorizedEditAgent(
        address agent
    );

    event LogRevokeInsertAgentAuthorization(
        address agent
    );

    event LogRevokeEditAgentAuthorization(
        address agent
    );

    modifier onlyAuthorizedToInsert() {
        require(entryInsertPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyAuthorizedToEdit() {
        require(entryEditPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyExtantEntry(bytes32 entryHash) {
        require(registry[entryHash].creditor != address(0));
        _;
    }

    function insert(
        string _version,
        address _creditor,
        address _termsContract,
        string _termsContractParameters,
        uint _salt
    )
        public
        onlyAuthorizedToInsert
    {
        Entry memory entry = Entry(
            _version,
            _creditor,
            _termsContract,
            _termsContractParameters
        );

        bytes32 entryHash = getEntryHash(entry, _salt);

        require(registry[entryHash].creditor == address(0));

        registry[entryHash] = entry;

        LogInsertEntry(
            entryHash,
            entry.creditor,
            entry.termsContract,
            entry.termsContractParameters
        );
    }

    function modifyCreditor(bytes32 entryHash, address newCreditor)
        public
        onlyAuthorizedToEdit
        onlyExtantEntry(entryHash)
    {
        LogModifyEntryCreditor(
            entryHash,
            registry[entryHash].creditor,
            newCreditor
        );

        registry[entryHash].creditor = newCreditor;
    }

    function addAuthorizedInsertAgent(address agent)
        public
        onlyOwner
    {
        entryInsertPermissions.authorize(agent);
        LogAddAuthorizedInsertAgent(agent);
    }

    function addAuthorizedEditAgent(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.authorize(agent);
        LogAddAuthorizedEditAgent(agent);
    }

    function revokeInsertAgentAuthorization(address agent)
        public
        onlyOwner
    {
        entryInsertPermissions.revokeAuthorization(agent);
        LogRevokeInsertAgentAuthorization(agent);
    }

    function revokeEditAgentAuthorization(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.revokeAuthorization(agent);
        LogRevokeEditAgentAuthorization(agent);
    }

    function get(bytes32 entryHash)
        public
        constant
        returns(string, address, address, string)
    {
        return (
            registry[entryHash].version,
            registry[entryHash].creditor,
            registry[entryHash].termsContract,
            registry[entryHash].termsContractParameters
        );
    }

    function getAuthorizedInsertAgents()
        public
        constant
        returns(address[])
    {
        return entryInsertPermissions.getAuthorizedAgents();
    }

    function getAuthorizedEditAgents()
        public
        constant
        returns(address[])
    {
        return entryEditPermissions.getAuthorizedAgents();
    }

    function getEntryHash(Entry _entry, uint _salt)
        internal
        pure
        returns(bytes32)
    {
        return keccak256(
            _entry.version,
            _entry.creditor,
            _entry.termsContract,
            _entry.termsContractParameters,
            _salt
        );
    }
}