export const BasicToken = 
{
  "contractName": "BasicToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6104008061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "sourceMap": "180:1119:33:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "180:1119:33:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;415:7;437:12;;430:19;;371:83;:::o;1189:107::-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;835:110:31:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"./ERC20Basic.sol\";\nimport \"../../math/SafeMath.sol\";\n\n\n/**\n * @title Basic token\n * @dev Basic version of StandardToken, with no allowances.\n */\ncontract BasicToken is ERC20Basic {\n  using SafeMath for uint256;\n\n  mapping(address => uint256) balances;\n\n  uint256 totalSupply_;\n\n  /**\n  * @dev total number of tokens in existence\n  */\n  function totalSupply() public view returns (uint256) {\n    return totalSupply_;\n  }\n\n  /**\n  * @dev transfer token for a specified address\n  * @param _to The address to transfer to.\n  * @param _value The amount to be transferred.\n  */\n  function transfer(address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[msg.sender]);\n\n    // SafeMath.sub will throw if there is not enough balance.\n    balances[msg.sender] = balances[msg.sender].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address.\n  * @param _owner The address to query the the balance of.\n  * @return An uint256 representing the amount owned by the passed address.\n  */\n  function balanceOf(address _owner) public view returns (uint256 balance) {\n    return balances[_owner];\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
      "exportedSymbols": {
        "BasicToken": [
          8887
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 8793,
        "name": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "attributes": {
          "SourceUnit": 8963,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 8888,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8794,
        "name": "ImportDirective",
        "src": "27:26:33"
      },
      {
        "attributes": {
          "SourceUnit": 8736,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 8888,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8795,
        "name": "ImportDirective",
        "src": "54:33:33"
      },
      {
        "attributes": {
          "contractDependencies": [
            8962
          ],
          "contractKind": "contract",
          "documentation": "@title Basic token\n@dev Basic version of StandardToken, with no allowances.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8887,
            8962
          ],
          "name": "BasicToken",
          "scope": 8888
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
                  "name": "ERC20Basic",
                  "referencedDeclaration": 8962,
                  "type": "contract ERC20Basic"
                },
                "id": 8796,
                "name": "UserDefinedTypeName",
                "src": "203:10:33"
              }
            ],
            "id": 8797,
            "name": "InheritanceSpecifier",
            "src": "203:10:33"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8735,
                  "type": "library SafeMath"
                },
                "id": 8798,
                "name": "UserDefinedTypeName",
                "src": "224:8:33"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8799,
                "name": "ElementaryTypeName",
                "src": "237:7:33"
              }
            ],
            "id": 8800,
            "name": "UsingForDirective",
            "src": "218:27:33"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 8887,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8801,
                    "name": "ElementaryTypeName",
                    "src": "257:7:33"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8802,
                    "name": "ElementaryTypeName",
                    "src": "268:7:33"
                  }
                ],
                "id": 8803,
                "name": "Mapping",
                "src": "249:27:33"
              }
            ],
            "id": 8804,
            "name": "VariableDeclaration",
            "src": "249:36:33"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply_",
              "scope": 8887,
              "stateVariable": true,
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
                "id": 8805,
                "name": "ElementaryTypeName",
                "src": "290:7:33"
              }
            ],
            "id": 8806,
            "name": "VariableDeclaration",
            "src": "290:20:33"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 8887,
              "stateMutability": "view",
              "superFunction": 8937,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8807,
                "name": "ParameterList",
                "src": "391:2:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8814,
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
                        "id": 8808,
                        "name": "ElementaryTypeName",
                        "src": "415:7:33"
                      }
                    ],
                    "id": 8809,
                    "name": "VariableDeclaration",
                    "src": "415:7:33"
                  }
                ],
                "id": 8810,
                "name": "ParameterList",
                "src": "414:9:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8810
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8806,
                          "type": "uint256",
                          "value": "totalSupply_"
                        },
                        "id": 8811,
                        "name": "Identifier",
                        "src": "437:12:33"
                      }
                    ],
                    "id": 8812,
                    "name": "Return",
                    "src": "430:19:33"
                  }
                ],
                "id": 8813,
                "name": "Block",
                "src": "424:30:33"
              }
            ],
            "id": 8814,
            "name": "FunctionDefinition",
            "src": "371:83:33"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 8887,
              "stateMutability": "nonpayable",
              "superFunction": 8953,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 8874,
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
                        "id": 8815,
                        "name": "ElementaryTypeName",
                        "src": "626:7:33"
                      }
                    ],
                    "id": 8816,
                    "name": "VariableDeclaration",
                    "src": "626:11:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 8874,
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
                        "id": 8817,
                        "name": "ElementaryTypeName",
                        "src": "639:7:33"
                      }
                    ],
                    "id": 8818,
                    "name": "VariableDeclaration",
                    "src": "639:14:33"
                  }
                ],
                "id": 8819,
                "name": "ParameterList",
                "src": "625:29:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8874,
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
                        "id": 8820,
                        "name": "ElementaryTypeName",
                        "src": "671:4:33"
                      }
                    ],
                    "id": 8821,
                    "name": "VariableDeclaration",
                    "src": "671:4:33"
                  }
                ],
                "id": 8822,
                "name": "ParameterList",
                "src": "670:6:33"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10476,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8823,
                            "name": "Identifier",
                            "src": "683:7:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8816,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8824,
                                "name": "Identifier",
                                "src": "691:3:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8825,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "698:7:33"
                                  },
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
                                    "id": 8826,
                                    "name": "Literal",
                                    "src": "706:1:33"
                                  }
                                ],
                                "id": 8827,
                                "name": "FunctionCall",
                                "src": "698:10:33"
                              }
                            ],
                            "id": 8828,
                            "name": "BinaryOperation",
                            "src": "691:17:33"
                          }
                        ],
                        "id": 8829,
                        "name": "FunctionCall",
                        "src": "683:26:33"
                      }
                    ],
                    "id": 8830,
                    "name": "ExpressionStatement",
                    "src": "683:26:33"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10476,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8831,
                            "name": "Identifier",
                            "src": "715:7:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8818,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8832,
                                "name": "Identifier",
                                "src": "723:6:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8804,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 8833,
                                    "name": "Identifier",
                                    "src": "733:8:33"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8834,
                                        "name": "Identifier",
                                        "src": "742:3:33"
                                      }
                                    ],
                                    "id": 8835,
                                    "name": "MemberAccess",
                                    "src": "742:10:33"
                                  }
                                ],
                                "id": 8836,
                                "name": "IndexAccess",
                                "src": "733:20:33"
                              }
                            ],
                            "id": 8837,
                            "name": "BinaryOperation",
                            "src": "723:30:33"
                          }
                        ],
                        "id": 8838,
                        "name": "FunctionCall",
                        "src": "715:39:33"
                      }
                    ],
                    "id": 8839,
                    "name": "ExpressionStatement",
                    "src": "715:39:33"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8804,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8840,
                                "name": "Identifier",
                                "src": "824:8:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10473,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8841,
                                    "name": "Identifier",
                                    "src": "833:3:33"
                                  }
                                ],
                                "id": 8842,
                                "name": "MemberAccess",
                                "src": "833:10:33"
                              }
                            ],
                            "id": 8843,
                            "name": "IndexAccess",
                            "src": "824:20:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 8710,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8804,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8844,
                                        "name": "Identifier",
                                        "src": "847:8:33"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 10473,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 8845,
                                            "name": "Identifier",
                                            "src": "856:3:33"
                                          }
                                        ],
                                        "id": 8846,
                                        "name": "MemberAccess",
                                        "src": "856:10:33"
                                      }
                                    ],
                                    "id": 8847,
                                    "name": "IndexAccess",
                                    "src": "847:20:33"
                                  }
                                ],
                                "id": 8848,
                                "name": "MemberAccess",
                                "src": "847:24:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8818,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8849,
                                "name": "Identifier",
                                "src": "872:6:33"
                              }
                            ],
                            "id": 8850,
                            "name": "FunctionCall",
                            "src": "847:32:33"
                          }
                        ],
                        "id": 8851,
                        "name": "Assignment",
                        "src": "824:55:33"
                      }
                    ],
                    "id": 8852,
                    "name": "ExpressionStatement",
                    "src": "824:55:33"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8804,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8853,
                                "name": "Identifier",
                                "src": "885:8:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8816,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8854,
                                "name": "Identifier",
                                "src": "894:3:33"
                              }
                            ],
                            "id": 8855,
                            "name": "IndexAccess",
                            "src": "885:13:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 8734,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8804,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8856,
                                        "name": "Identifier",
                                        "src": "901:8:33"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8816,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 8857,
                                        "name": "Identifier",
                                        "src": "910:3:33"
                                      }
                                    ],
                                    "id": 8858,
                                    "name": "IndexAccess",
                                    "src": "901:13:33"
                                  }
                                ],
                                "id": 8859,
                                "name": "MemberAccess",
                                "src": "901:17:33"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8818,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8860,
                                "name": "Identifier",
                                "src": "919:6:33"
                              }
                            ],
                            "id": 8861,
                            "name": "FunctionCall",
                            "src": "901:25:33"
                          }
                        ],
                        "id": 8862,
                        "name": "Assignment",
                        "src": "885:41:33"
                      }
                    ],
                    "id": 8863,
                    "name": "ExpressionStatement",
                    "src": "885:41:33"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8961,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 8864,
                            "name": "Identifier",
                            "src": "932:8:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10473,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8865,
                                "name": "Identifier",
                                "src": "941:3:33"
                              }
                            ],
                            "id": 8866,
                            "name": "MemberAccess",
                            "src": "941:10:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8816,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 8867,
                            "name": "Identifier",
                            "src": "953:3:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8818,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8868,
                            "name": "Identifier",
                            "src": "958:6:33"
                          }
                        ],
                        "id": 8869,
                        "name": "FunctionCall",
                        "src": "932:33:33"
                      }
                    ],
                    "id": 8870,
                    "name": "ExpressionStatement",
                    "src": "932:33:33"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8822
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 8871,
                        "name": "Literal",
                        "src": "978:4:33"
                      }
                    ],
                    "id": 8872,
                    "name": "Return",
                    "src": "971:11:33"
                  }
                ],
                "id": 8873,
                "name": "Block",
                "src": "677:310:33"
              }
            ],
            "id": 8874,
            "name": "FunctionDefinition",
            "src": "608:379:33"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 8887,
              "stateMutability": "view",
              "superFunction": 8944,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 8886,
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
                        "id": 8875,
                        "name": "ElementaryTypeName",
                        "src": "1208:7:33"
                      }
                    ],
                    "id": 8876,
                    "name": "VariableDeclaration",
                    "src": "1208:14:33"
                  }
                ],
                "id": 8877,
                "name": "ParameterList",
                "src": "1207:16:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 8886,
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
                        "id": 8878,
                        "name": "ElementaryTypeName",
                        "src": "1245:7:33"
                      }
                    ],
                    "id": 8879,
                    "name": "VariableDeclaration",
                    "src": "1245:15:33"
                  }
                ],
                "id": 8880,
                "name": "ParameterList",
                "src": "1244:17:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8880
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8804,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 8881,
                            "name": "Identifier",
                            "src": "1275:8:33"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8876,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 8882,
                            "name": "Identifier",
                            "src": "1284:6:33"
                          }
                        ],
                        "id": 8883,
                        "name": "IndexAccess",
                        "src": "1275:16:33"
                      }
                    ],
                    "id": 8884,
                    "name": "Return",
                    "src": "1268:23:33"
                  }
                ],
                "id": 8885,
                "name": "Block",
                "src": "1262:34:33"
              }
            ],
            "id": 8886,
            "name": "FunctionDefinition",
            "src": "1189:107:33"
          }
        ],
        "id": 8887,
        "name": "ContractDefinition",
        "src": "180:1119:33"
      }
    ],
    "id": 8888,
    "name": "SourceUnit",
    "src": "0:1300:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-22T05:49:38.835Z"
}