export const TermsContract = 
{
  "contractName": "TermsContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ninterface TermsContract {\n     /// When called, the registerTermStart function registers the fact that\n     ///    the debt agreement has begun.  This method is called as a hook by the\n     ///    DebtKernel when a debt order associated with `agreementId` is filled.\n     ///    Method is not required to make any sort of internal state change\n     ///    upon the debt agreement's start, but MUST return `true` in order to\n     ///    acknowledge receipt of the transaction.  If, for any reason, the\n     ///    debt agreement stored at `agreementId` is incompatible with this contract,\n     ///    MUST return `false`, which will cause the pertinent order fill to fail.\n     ///    If this method is called for a debt agreement whose term has already begun,\n     ///    must THROW.  Similarly, if this method is called by any contract other\n     ///    than the current DebtKernel, must THROW.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId\n    ) public returns (bool _success);\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    ) public returns (bool _success);\n\n     /// Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    ) public view returns (uint256);\n\n     /// Returns the cumulative units-of-value repaid by the point at which this method is called.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid up until now.\n    function getValueRepaidToDate(\n        bytes32 agreementId\n    ) public view returns (uint256);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
      "exportedSymbols": {
        "TermsContract": [
          2092
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2053,
        "name": "PragmaDirective",
        "src": "584:23:4"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "interface",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2092
          ],
          "name": "TermsContract",
          "scope": 2093
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 2092,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2060,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2054,
                        "name": "ElementaryTypeName",
                        "src": "1721:7:4"
                      }
                    ],
                    "id": 2055,
                    "name": "VariableDeclaration",
                    "src": "1721:19:4"
                  }
                ],
                "id": 2056,
                "name": "ParameterList",
                "src": "1711:35:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 2060,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2057,
                        "name": "ElementaryTypeName",
                        "src": "1763:4:4"
                      }
                    ],
                    "id": 2058,
                    "name": "VariableDeclaration",
                    "src": "1763:13:4"
                  }
                ],
                "id": 2059,
                "name": "ParameterList",
                "src": "1762:15:4"
              }
            ],
            "id": 2060,
            "name": "FunctionDefinition",
            "src": "1685:93:4"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 2092,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2061,
                        "name": "ElementaryTypeName",
                        "src": "2525:7:4"
                      }
                    ],
                    "id": 2062,
                    "name": "VariableDeclaration",
                    "src": "2525:19:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2063,
                        "name": "ElementaryTypeName",
                        "src": "2554:7:4"
                      }
                    ],
                    "id": 2064,
                    "name": "VariableDeclaration",
                    "src": "2554:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2065,
                        "name": "ElementaryTypeName",
                        "src": "2577:7:4"
                      }
                    ],
                    "id": 2066,
                    "name": "VariableDeclaration",
                    "src": "2577:19:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2067,
                        "name": "ElementaryTypeName",
                        "src": "2606:7:4"
                      }
                    ],
                    "id": 2068,
                    "name": "VariableDeclaration",
                    "src": "2606:24:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2069,
                        "name": "ElementaryTypeName",
                        "src": "2640:7:4"
                      }
                    ],
                    "id": 2070,
                    "name": "VariableDeclaration",
                    "src": "2640:20:4"
                  }
                ],
                "id": 2071,
                "name": "ParameterList",
                "src": "2515:151:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 2075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2072,
                        "name": "ElementaryTypeName",
                        "src": "2683:4:4"
                      }
                    ],
                    "id": 2073,
                    "name": "VariableDeclaration",
                    "src": "2683:13:4"
                  }
                ],
                "id": 2074,
                "name": "ParameterList",
                "src": "2682:15:4"
              }
            ],
            "id": 2075,
            "name": "FunctionDefinition",
            "src": "2489:209:4"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 2092,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2084,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2076,
                        "name": "ElementaryTypeName",
                        "src": "3378:7:4"
                      }
                    ],
                    "id": 2077,
                    "name": "VariableDeclaration",
                    "src": "3378:19:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 2084,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2078,
                        "name": "ElementaryTypeName",
                        "src": "3407:7:4"
                      }
                    ],
                    "id": 2079,
                    "name": "VariableDeclaration",
                    "src": "3407:17:4"
                  }
                ],
                "id": 2080,
                "name": "ParameterList",
                "src": "3368:62:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2084,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2081,
                        "name": "ElementaryTypeName",
                        "src": "3452:7:4"
                      }
                    ],
                    "id": 2082,
                    "name": "VariableDeclaration",
                    "src": "3452:7:4"
                  }
                ],
                "id": 2083,
                "name": "ParameterList",
                "src": "3451:9:4"
              }
            ],
            "id": 2084,
            "name": "FunctionDefinition",
            "src": "3334:127:4"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 2092,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2091,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2085,
                        "name": "ElementaryTypeName",
                        "src": "3798:7:4"
                      }
                    ],
                    "id": 2086,
                    "name": "VariableDeclaration",
                    "src": "3798:19:4"
                  }
                ],
                "id": 2087,
                "name": "ParameterList",
                "src": "3788:35:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2091,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2088,
                        "name": "ElementaryTypeName",
                        "src": "3845:7:4"
                      }
                    ],
                    "id": 2089,
                    "name": "VariableDeclaration",
                    "src": "3845:7:4"
                  }
                ],
                "id": 2090,
                "name": "ParameterList",
                "src": "3844:9:4"
              }
            ],
            "id": 2091,
            "name": "FunctionDefinition",
            "src": "3759:95:4"
          }
        ],
        "id": 2092,
        "name": "ContractDefinition",
        "src": "610:3246:4"
      }
    ],
    "id": 2093,
    "name": "SourceUnit",
    "src": "584:3273:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.602Z"
}