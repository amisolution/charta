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


library PermissionsLib {
    struct Permissions {
        mapping (address => bool) authorized;
        mapping (address => uint) agentToIndex;
        address[] authorizedAgents;
    }

    function authorize(Permissions storage self, address agent)
        internal
    {
        require(isNotAuthorized(self, agent));

        self.authorized[agent] = true;
        self.authorizedAgents.push(agent);
        self.agentToIndex[agent] = self.authorizedAgents.length - 1;
    }

    function revokeAuthorization(Permissions storage self, address agent)
        internal
    {
        /* We only want to do work in the case where the agent whose
        authorization is being revoked had authorization permissions in the
        first place */
        require(isAuthorized(self, agent));

        uint indexOfAgentToRevoke = self.agentToIndex[agent];
        uint indexOfAgentToMove = self.authorizedAgents.length - 1;
        address agentToMove = self.authorizedAgents[indexOfAgentToMove];

        delete self.authorized[agent];
        self.authorizedAgents[indexOfAgentToRevoke] =
            self.authorizedAgents[indexOfAgentToMove];
        self.authorizedAgents.length -= 1;
        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;
        delete self.agentToIndex[agent];
    }

    function isAuthorized(Permissions storage self, address agent)
        internal
        view
        returns (bool)
    {
        return self.authorized[agent];
    }

    function isNotAuthorized(Permissions storage self, address agent)
        internal
        view
        returns (bool)
    {
        return !isAuthorized(self, agent);
    }

    function getAuthorizedAgents(Permissions storage self)
        internal
        view
        returns (address[])
    {
        return self.authorizedAgents;
    }
}
