export const IncompatibleTermsContract = 
{
  "contractName": "IncompatibleTermsContract",
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
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getTermEndTimestamp",
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
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
          "type": "address"
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
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6102938061001e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a7230582009efa511181f2339b0fb38f2f6c2b2bc03086dbea05862f286a0f0d59906d2430029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a7230582009efa511181f2339b0fb38f2f6c2b2bc03086dbea05862f286a0f0d59906d2430029",
  "sourceMap": "867:3132:26:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "867:3132:26:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
      "exportedSymbols": {
        "IncompatibleTermsContract": [
          7225
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
        "id": 7159,
        "name": "PragmaDirective",
        "src": "584:23:26"
      },
      {
        "attributes": {
          "SourceUnit": 3283,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../../TermsContract.sol",
          "scope": 7226,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7160,
        "name": "ImportDirective",
        "src": "609:33:26"
      },
      {
        "attributes": {
          "contractDependencies": [
            3282
          ],
          "contractKind": "contract",
          "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7225,
            3282
          ],
          "name": "IncompatibleTermsContract",
          "scope": 7226
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TermsContract",
                  "referencedDeclaration": 3282,
                  "type": "contract TermsContract"
                },
                "id": 7161,
                "name": "UserDefinedTypeName",
                "src": "905:13:26"
              }
            ],
            "id": 7162,
            "name": "InheritanceSpecifier",
            "src": "905:13:26"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 7225,
              "stateMutability": "nonpayable",
              "superFunction": 3243,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 7174,
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
                        "id": 7163,
                        "name": "ElementaryTypeName",
                        "src": "1536:7:26"
                      }
                    ],
                    "id": 7164,
                    "name": "VariableDeclaration",
                    "src": "1536:19:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 7174,
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
                        "id": 7165,
                        "name": "ElementaryTypeName",
                        "src": "1565:7:26"
                      }
                    ],
                    "id": 7166,
                    "name": "VariableDeclaration",
                    "src": "1565:14:26"
                  }
                ],
                "id": 7167,
                "name": "ParameterList",
                "src": "1526:59:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 7174,
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
                        "id": 7168,
                        "name": "ElementaryTypeName",
                        "src": "1618:4:26"
                      }
                    ],
                    "id": 7169,
                    "name": "VariableDeclaration",
                    "src": "1618:13:26"
                  }
                ],
                "id": 7170,
                "name": "ParameterList",
                "src": "1617:15:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7170
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 7171,
                        "name": "Literal",
                        "src": "1654:5:26"
                      }
                    ],
                    "id": 7172,
                    "name": "Return",
                    "src": "1647:12:26"
                  }
                ],
                "id": 7173,
                "name": "Block",
                "src": "1637:29:26"
              }
            ],
            "id": 7174,
            "name": "FunctionDefinition",
            "src": "1500:166:26"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 7225,
              "stateMutability": "nonpayable",
              "superFunction": 3258,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 7192,
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
                        "id": 7175,
                        "name": "ElementaryTypeName",
                        "src": "2413:7:26"
                      }
                    ],
                    "id": 7176,
                    "name": "VariableDeclaration",
                    "src": "2413:19:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 7192,
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
                        "id": 7177,
                        "name": "ElementaryTypeName",
                        "src": "2442:7:26"
                      }
                    ],
                    "id": 7178,
                    "name": "VariableDeclaration",
                    "src": "2442:13:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 7192,
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
                        "id": 7179,
                        "name": "ElementaryTypeName",
                        "src": "2465:7:26"
                      }
                    ],
                    "id": 7180,
                    "name": "VariableDeclaration",
                    "src": "2465:19:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 7192,
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
                        "id": 7181,
                        "name": "ElementaryTypeName",
                        "src": "2494:7:26"
                      }
                    ],
                    "id": 7182,
                    "name": "VariableDeclaration",
                    "src": "2494:24:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 7192,
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
                        "id": 7183,
                        "name": "ElementaryTypeName",
                        "src": "2528:7:26"
                      }
                    ],
                    "id": 7184,
                    "name": "VariableDeclaration",
                    "src": "2528:20:26"
                  }
                ],
                "id": 7185,
                "name": "ParameterList",
                "src": "2403:151:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 7192,
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
                        "id": 7186,
                        "name": "ElementaryTypeName",
                        "src": "2587:4:26"
                      }
                    ],
                    "id": 7187,
                    "name": "VariableDeclaration",
                    "src": "2587:13:26"
                  }
                ],
                "id": 7188,
                "name": "ParameterList",
                "src": "2586:15:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7188
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 7189,
                        "name": "Literal",
                        "src": "2623:5:26"
                      }
                    ],
                    "id": 7190,
                    "name": "Return",
                    "src": "2616:12:26"
                  }
                ],
                "id": 7191,
                "name": "Block",
                "src": "2606:29:26"
              }
            ],
            "id": 7192,
            "name": "FunctionDefinition",
            "src": "2377:258:26"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 7225,
              "stateMutability": "view",
              "superFunction": 3267,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 7204,
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
                        "id": 7193,
                        "name": "ElementaryTypeName",
                        "src": "3288:7:26"
                      }
                    ],
                    "id": 7194,
                    "name": "VariableDeclaration",
                    "src": "3288:19:26"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 7204,
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
                        "id": 7195,
                        "name": "ElementaryTypeName",
                        "src": "3317:7:26"
                      }
                    ],
                    "id": 7196,
                    "name": "VariableDeclaration",
                    "src": "3317:17:26"
                  }
                ],
                "id": 7197,
                "name": "ParameterList",
                "src": "3278:62:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 7204,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7198,
                        "name": "ElementaryTypeName",
                        "src": "3386:4:26"
                      }
                    ],
                    "id": 7199,
                    "name": "VariableDeclaration",
                    "src": "3386:28:26"
                  }
                ],
                "id": 7200,
                "name": "ParameterList",
                "src": "3385:30:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7200
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 7201,
                        "name": "Literal",
                        "src": "3437:1:26"
                      }
                    ],
                    "id": 7202,
                    "name": "Return",
                    "src": "3430:8:26"
                  }
                ],
                "id": 7203,
                "name": "Block",
                "src": "3420:25:26"
              }
            ],
            "id": 7204,
            "name": "FunctionDefinition",
            "src": "3244:201:26"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 7225,
              "stateMutability": "view",
              "superFunction": 3274,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 7214,
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
                        "id": 7205,
                        "name": "ElementaryTypeName",
                        "src": "3756:7:26"
                      }
                    ],
                    "id": 7206,
                    "name": "VariableDeclaration",
                    "src": "3756:19:26"
                  }
                ],
                "id": 7207,
                "name": "ParameterList",
                "src": "3755:21:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 7214,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7208,
                        "name": "ElementaryTypeName",
                        "src": "3822:4:26"
                      }
                    ],
                    "id": 7209,
                    "name": "VariableDeclaration",
                    "src": "3822:17:26"
                  }
                ],
                "id": 7210,
                "name": "ParameterList",
                "src": "3821:19:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7210
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 7211,
                        "name": "Literal",
                        "src": "3862:1:26"
                      }
                    ],
                    "id": 7212,
                    "name": "Return",
                    "src": "3855:8:26"
                  }
                ],
                "id": 7213,
                "name": "Block",
                "src": "3845:25:26"
              }
            ],
            "id": 7214,
            "name": "FunctionDefinition",
            "src": "3726:144:26"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTermEndTimestamp",
              "payable": false,
              "scope": 7225,
              "stateMutability": "view",
              "superFunction": 3281,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agreementId",
                      "scope": 7224,
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
                        "id": 7215,
                        "name": "ElementaryTypeName",
                        "src": "3914:7:26"
                      }
                    ],
                    "id": 7216,
                    "name": "VariableDeclaration",
                    "src": "3914:20:26"
                  }
                ],
                "id": 7217,
                "name": "ParameterList",
                "src": "3904:36:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7224,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7218,
                        "name": "ElementaryTypeName",
                        "src": "3962:4:26"
                      }
                    ],
                    "id": 7219,
                    "name": "VariableDeclaration",
                    "src": "3962:4:26"
                  }
                ],
                "id": 7220,
                "name": "ParameterList",
                "src": "3961:6:26"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7220
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 7221,
                        "name": "Literal",
                        "src": "3989:1:26"
                      }
                    ],
                    "id": 7222,
                    "name": "Return",
                    "src": "3982:8:26"
                  }
                ],
                "id": 7223,
                "name": "Block",
                "src": "3972:25:26"
              }
            ],
            "id": 7224,
            "name": "FunctionDefinition",
            "src": "3876:121:26"
          }
        ],
        "id": 7225,
        "name": "ContractDefinition",
        "src": "867:3132:26"
      }
    ],
    "id": 7226,
    "name": "SourceUnit",
    "src": "584:3416:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {},
      "links": {},
      "address": "0x76aa5a86834cafc1b520787056f99364ad2fb7ed"
    },
    "42": {
      "events": {},
      "links": {},
      "address": "0xb2e179e109640107d9dd84fef76768219cdb9089"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xb35f2124203a1560e5e0a4d6dcfc1f4f4d4d6b07"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-22T06:13:04.107Z"
}