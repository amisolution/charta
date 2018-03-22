export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolToTokenAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddressBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenAddressByIndex",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "tokenSymbolHashListLength",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "owner",
      "type": "function",
      "constant": true,
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenSymbolHashList",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061088c806100536000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e5614610093578063202b96881461010f5780633550b6d9146101765780635715c5b714610213578063658f8d66146102765780638da5cb5b146102a5578063b1d4bc1b146102fa578063f2fde38b14610339575b600080fd5b341561009e57600080fd5b61010d600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610372565b005b341561011a57600080fd5b610134600480803560001916906020019091905050610587565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561018157600080fd5b6101d1600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105ba565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021e57600080fd5b6102346004808035906020019091905050610661565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028157600080fd5b6102896106b7565b604051808260ff1660ff16815260200191505060405180910390f35b34156102b057600080fd5b6102b86106cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030557600080fd5b61031b60048080359060200190919050506106f0565b60405180826000191660001916815260200191505060405180910390f35b341561034457600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061070b565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103cf57600080fd5b61010061010260009054906101000a900460ff1660ff161015156103f257600080fd5b826040518082805190602001908083835b6020831015156104285780518252602082019150602081019050602083039250610403565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156105285780600261010260009054906101000a900460ff1660ff16610100811015156104eb57fe5b018160001916905550610102600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060016000836040518082805190602001908083835b6020831015156105f657805182526020820191506020810190506020830392506105d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160006002846101008110151561067757fe5b01546000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61010260009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002816101008110151561070057fe5b016000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561076657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107a257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206725e40e3ad539d66334123ba9998ae19a461cc73eba783c6ee9ac496b10fa690029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e5614610093578063202b96881461010f5780633550b6d9146101765780635715c5b714610213578063658f8d66146102765780638da5cb5b146102a5578063b1d4bc1b146102fa578063f2fde38b14610339575b600080fd5b341561009e57600080fd5b61010d600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610372565b005b341561011a57600080fd5b610134600480803560001916906020019091905050610587565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561018157600080fd5b6101d1600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105ba565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021e57600080fd5b6102346004808035906020019091905050610661565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028157600080fd5b6102896106b7565b604051808260ff1660ff16815260200191505060405180910390f35b34156102b057600080fd5b6102b86106cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030557600080fd5b61031b60048080359060200190919050506106f0565b60405180826000191660001916815260200191505060405180910390f35b341561034457600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061070b565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103cf57600080fd5b61010061010260009054906101000a900460ff1660ff161015156103f257600080fd5b826040518082805190602001908083835b6020831015156104285780518252602082019150602081019050602083039250610403565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156105285780600261010260009054906101000a900460ff1660ff16610100811015156104eb57fe5b018160001916905550610102600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060016000836040518082805190602001908083835b6020831015156105f657805182526020820191506020810190506020830392506105d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160006002846101008110151561067757fe5b01546000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61010260009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002816101008110151561070057fe5b016000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561076657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107a257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206725e40e3ad539d66334123ba9998ae19a461cc73eba783c6ee9ac496b10fa690029",
  "sourceMap": "717:1528:5:-;;;509:10:23;501:5;;:18;;;;;;;;;;;;;;;;;;717:1528:5;;;;;;",
  "deployedSourceMap": "717:1528:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;982:416;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1510:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2097:146;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;819:39:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;982:416:5;1115:18;653:5:23;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1100:3:5;1072:25;;;;;;;;;;;:31;;;1064:40;;;;;;;;1146:6;1136:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1115:38:5;;1212:1;1168:46;;:20;:32;1189:10;1168:32;;;;;;;;;;;;;;;;;;;;;;;;;;;:46;;;1164:177;;;1279:10;1230:19;1250:25;;;;;;;;;;;1230:46;;;;;;;;;;;;:59;;;;;;;1303:25;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1164:177;1386:5;1351:20;:32;1372:10;1351:32;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;982:416;;;:::o;757:56::-;;;;;;;;;;;;;;;;;;;;;;:::o;1510:141::-;1579:7;1605:20;:39;1636:6;1626:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1605:39:5;;;;;;;;;;;;;;;;;;;;;;;;;;;1598:46;;1510:141;;;:::o;2097:146::-;2162:7;2188:20;:48;2209:19;2229:5;2209:26;;;;;;;;;;;2188:48;;;;;;;;;;;;;;;;;;;;;;;;;;;2181:55;;2097:146;;;:::o;864:38::-;;;;;;;;;;;;;:::o;238:20:23:-;;;;;;;;;;;;;:::o;819:39:5:-;;;;;;;;;;;;;;;;;;;;:::o;832:169:23:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * The TokenRegistry is a basic registry mapping token symbols\n * to their known, deployed addresses on the current blockchain.\n *\n * Note that the TokenRegistry does *not* mediate any of the\n * core protocol's business logic, but, rather, is a helpful\n * utility for Terms Contracts to use in encoding, decoding, and\n * resolving the addresses of currently deployed tokens.\n *\n * At this point in time, administration of the Token Registry is\n * under Dharma Labs' control.  With more sophisticated decentralized\n * governance mechanisms, we intend to shift ownership of this utility\n * contract to the Dharma community.\n */\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => address) public symbolToTokenAddress;\n    bytes32[256] public tokenSymbolHashList;\n    uint8 public tokenSymbolHashListLength;\n\n    /**\n     * Maps the given symbol to the given token address.\n     */\n    function setTokenAddress(string symbol, address token) public onlyOwner {\n        require(tokenSymbolHashListLength < 256);\n\n        bytes32 symbolHash = keccak256(symbol);\n\n        if (symbolToTokenAddress[symbolHash] == address(0)) {\n            tokenSymbolHashList[tokenSymbolHashListLength] = symbolHash;\n            tokenSymbolHashListLength++;\n        }\n\n        symbolToTokenAddress[symbolHash] = token;\n    }\n\n    /**\n     * Given a symbol, resolves the current address of the token the symbol is mapped to.\n     */\n    function getTokenAddressBySymbol(string symbol) public view returns (address) {\n        return symbolToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given the known index of a token within the registry's symbol hash list,\n     * returns the address of the token mapped to the symbol at that index.\n     *\n     * This is a useful utility for compactly encoding the address of a token into a\n     * TermsContractParameters string -- by encoding a token by its index in a\n     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.\n     */\n    function getTokenAddressByIndex(uint index) public view returns (address) {\n        return symbolToTokenAddress[tokenSymbolHashList[index]];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          2182
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
        "id": 2094,
        "name": "PragmaDirective",
        "src": "0:23:5"
      },
      {
        "attributes": {
          "SourceUnit": 5389,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 2183,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2095,
        "name": "ImportDirective",
        "src": "25:59:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            5388
          ],
          "contractKind": "contract",
          "documentation": "The TokenRegistry is a basic registry mapping token symbols\nto their known, deployed addresses on the current blockchain.\n * Note that the TokenRegistry does *not* mediate any of the\ncore protocol's business logic, but, rather, is a helpful\nutility for Terms Contracts to use in encoding, decoding, and\nresolving the addresses of currently deployed tokens.\n * At this point in time, administration of the Token Registry is\nunder Dharma Labs' control.  With more sophisticated decentralized\ngovernance mechanisms, we intend to shift ownership of this utility\ncontract to the Dharma community.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2182,
            5388
          ],
          "name": "TokenRegistry",
          "scope": 2183
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
                  "name": "Ownable",
                  "referencedDeclaration": 5388,
                  "type": "contract Ownable"
                },
                "id": 2096,
                "name": "UserDefinedTypeName",
                "src": "743:7:5"
              }
            ],
            "id": 2097,
            "name": "InheritanceSpecifier",
            "src": "743:7:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolToTokenAddress",
              "scope": 2182,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2098,
                    "name": "ElementaryTypeName",
                    "src": "766:7:5"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 2099,
                    "name": "ElementaryTypeName",
                    "src": "777:7:5"
                  }
                ],
                "id": 2100,
                "name": "Mapping",
                "src": "757:28:5"
              }
            ],
            "id": 2101,
            "name": "VariableDeclaration",
            "src": "757:56:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "tokenSymbolHashList",
              "payable": false,
              "scope": 2182,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public",
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[256] storage ref",
              "value": null
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "bytes32",
                      "scope": 2177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2160,
                        "name": "ElementaryTypeName",
                        "src": "215:6:6"
                      }
                    ],
                    "id": 2102,
                    "name": "ElementaryTypeName",
                    "src": "819:7:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int_const 256",
                      "value": "256",
                      "visibility": "internal",
                      "argumentTypes": null,
                      "hexvalue": "323536",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2162,
                        "name": "ElementaryTypeName",
                        "src": "230:7:6"
                      }
                    ],
                    "id": 2103,
                    "name": "Literal",
                    "src": "827:3:5"
                  }
                ],
                "id": 2104,
                "name": "ArrayTypeName",
                "src": "819:12:5",
                "attributes": {
                  "type": "bytes32[256] storage pointer"
                }
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2167,
                "name": "ParameterList",
                "src": "262:0:6"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2165,
                    "name": "Identifier",
                    "src": "252:9:6"
                  }
                ],
                "id": 2166,
                "name": "ModifierInvocation",
                "src": "252:9:6"
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
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2159,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 2168,
                                "name": "Identifier",
                                "src": "272:20:6"
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
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8361,
                                      "type": "function () pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 2169,
                                    "name": "Identifier",
                                    "src": "293:9:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2161,
                                      "type": "string memory",
                                      "value": "symbol"
                                    },
                                    "id": 2170,
                                    "name": "Identifier",
                                    "src": "303:6:6"
                                  }
                                ],
                                "id": 2171,
                                "name": "FunctionCall",
                                "src": "293:17:6"
                              }
                            ],
                            "id": 2172,
                            "name": "IndexAccess",
                            "src": "272:39:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2163,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2173,
                            "name": "Identifier",
                            "src": "314:5:6"
                          }
                        ],
                        "id": 2174,
                        "name": "Assignment",
                        "src": "272:47:6"
                      }
                    ],
                    "id": 2175,
                    "name": "ExpressionStatement",
                    "src": "272:47:6"
                  }
                ],
                "id": 2176,
                "name": "Block",
                "src": "262:64:6"
              }
            ],
            "id": 2105,
            "name": "VariableDeclaration",
            "src": "819:39:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "tokenSymbolHashListLength",
              "payable": false,
              "scope": 2182,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public",
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 2191,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2178,
                        "name": "ElementaryTypeName",
                        "src": "357:6:6"
                      }
                    ],
                    "id": 2179,
                    "name": "VariableDeclaration",
                    "src": "357:13:6"
                  }
                ],
                "id": 2106,
                "name": "ElementaryTypeName",
                "src": "864:5:5",
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                }
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2191,
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
                        "id": 2181,
                        "name": "ElementaryTypeName",
                        "src": "393:7:6"
                      }
                    ],
                    "id": 2182,
                    "name": "VariableDeclaration",
                    "src": "393:7:6"
                  }
                ],
                "id": 2183,
                "name": "ParameterList",
                "src": "392:9:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2183
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2159,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 2184,
                            "name": "Identifier",
                            "src": "419:20:6"
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
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8361,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2185,
                                "name": "Identifier",
                                "src": "440:9:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2179,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 2186,
                                "name": "Identifier",
                                "src": "450:6:6"
                              }
                            ],
                            "id": 2187,
                            "name": "FunctionCall",
                            "src": "440:17:6"
                          }
                        ],
                        "id": 2188,
                        "name": "IndexAccess",
                        "src": "419:39:6"
                      }
                    ],
                    "id": 2189,
                    "name": "Return",
                    "src": "412:46:6"
                  }
                ],
                "id": 2190,
                "name": "Block",
                "src": "402:63:6"
              }
            ],
            "id": 2107,
            "name": "VariableDeclaration",
            "src": "864:38:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAddress",
              "payable": false,
              "scope": 2182,
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
                      "name": "symbol",
                      "scope": 2153,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2108,
                        "name": "ElementaryTypeName",
                        "src": "1007:6:5"
                      }
                    ],
                    "id": 2109,
                    "name": "VariableDeclaration",
                    "src": "1007:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2153,
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
                        "id": 2110,
                        "name": "ElementaryTypeName",
                        "src": "1022:7:5"
                      }
                    ],
                    "id": 2111,
                    "name": "VariableDeclaration",
                    "src": "1022:13:5"
                  }
                ],
                "id": 2112,
                "name": "ParameterList",
                "src": "1006:30:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2115,
                "name": "ParameterList",
                "src": "1054:0:5"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5362,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2113,
                    "name": "Identifier",
                    "src": "1044:9:5"
                  }
                ],
                "id": 2114,
                "name": "ModifierInvocation",
                "src": "1044:9:5"
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
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2116,
                            "name": "Identifier",
                            "src": "1064:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2107,
                                  "type": "uint8",
                                  "value": "tokenSymbolHashListLength"
                                },
                                "id": 2117,
                                "name": "Identifier",
                                "src": "1072:25:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 256",
                                  "value": "256"
                                },
                                "id": 2118,
                                "name": "Literal",
                                "src": "1100:3:5"
                              }
                            ],
                            "id": 2119,
                            "name": "BinaryOperation",
                            "src": "1072:31:5"
                          }
                        ],
                        "id": 2120,
                        "name": "FunctionCall",
                        "src": "1064:40:5"
                      }
                    ],
                    "id": 2121,
                    "name": "ExpressionStatement",
                    "src": "1064:40:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2123
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 2153,
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
                            "id": 2122,
                            "name": "ElementaryTypeName",
                            "src": "1115:7:5"
                          }
                        ],
                        "id": 2123,
                        "name": "VariableDeclaration",
                        "src": "1115:18:5"
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
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5469,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 2124,
                            "name": "Identifier",
                            "src": "1136:9:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2109,
                              "type": "string memory",
                              "value": "symbol"
                            },
                            "id": 2125,
                            "name": "Identifier",
                            "src": "1146:6:5"
                          }
                        ],
                        "id": 2126,
                        "name": "FunctionCall",
                        "src": "1136:17:5"
                      }
                    ],
                    "id": 2127,
                    "name": "VariableDeclarationStatement",
                    "src": "1115:38:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
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
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2101,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 2128,
                                "name": "Identifier",
                                "src": "1168:20:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2123,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 2129,
                                "name": "Identifier",
                                "src": "1189:10:5"
                              }
                            ],
                            "id": 2130,
                            "name": "IndexAccess",
                            "src": "1168:32:5"
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
                                "id": 2131,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1204:7:5"
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
                                "id": 2132,
                                "name": "Literal",
                                "src": "1212:1:5"
                              }
                            ],
                            "id": 2133,
                            "name": "FunctionCall",
                            "src": "1204:10:5"
                          }
                        ],
                        "id": 2134,
                        "name": "BinaryOperation",
                        "src": "1168:46:5"
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
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "bytes32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "bytes32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2105,
                                          "type": "bytes32[256] storage ref",
                                          "value": "tokenSymbolHashList"
                                        },
                                        "id": 2135,
                                        "name": "Identifier",
                                        "src": "1230:19:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2107,
                                          "type": "uint8",
                                          "value": "tokenSymbolHashListLength"
                                        },
                                        "id": 2136,
                                        "name": "Identifier",
                                        "src": "1250:25:5"
                                      }
                                    ],
                                    "id": 2137,
                                    "name": "IndexAccess",
                                    "src": "1230:46:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2123,
                                      "type": "bytes32",
                                      "value": "symbolHash"
                                    },
                                    "id": 2138,
                                    "name": "Identifier",
                                    "src": "1279:10:5"
                                  }
                                ],
                                "id": 2139,
                                "name": "Assignment",
                                "src": "1230:59:5"
                              }
                            ],
                            "id": 2140,
                            "name": "ExpressionStatement",
                            "src": "1230:59:5"
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
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2107,
                                      "type": "uint8",
                                      "value": "tokenSymbolHashListLength"
                                    },
                                    "id": 2141,
                                    "name": "Identifier",
                                    "src": "1303:25:5"
                                  }
                                ],
                                "id": 2142,
                                "name": "UnaryOperation",
                                "src": "1303:27:5"
                              }
                            ],
                            "id": 2143,
                            "name": "ExpressionStatement",
                            "src": "1303:27:5"
                          }
                        ],
                        "id": 2144,
                        "name": "Block",
                        "src": "1216:125:5"
                      }
                    ],
                    "id": 2145,
                    "name": "IfStatement",
                    "src": "1164:177:5"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2101,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 2146,
                                "name": "Identifier",
                                "src": "1351:20:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2123,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 2147,
                                "name": "Identifier",
                                "src": "1372:10:5"
                              }
                            ],
                            "id": 2148,
                            "name": "IndexAccess",
                            "src": "1351:32:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2111,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2149,
                            "name": "Identifier",
                            "src": "1386:5:5"
                          }
                        ],
                        "id": 2150,
                        "name": "Assignment",
                        "src": "1351:40:5"
                      }
                    ],
                    "id": 2151,
                    "name": "ExpressionStatement",
                    "src": "1351:40:5"
                  }
                ],
                "id": 2152,
                "name": "Block",
                "src": "1054:344:5"
              }
            ],
            "id": 2153,
            "name": "FunctionDefinition",
            "src": "982:416:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressBySymbol",
              "payable": false,
              "scope": 2182,
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
                      "name": "symbol",
                      "scope": 2167,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2154,
                        "name": "ElementaryTypeName",
                        "src": "1543:6:5"
                      }
                    ],
                    "id": 2155,
                    "name": "VariableDeclaration",
                    "src": "1543:13:5"
                  }
                ],
                "id": 2156,
                "name": "ParameterList",
                "src": "1542:15:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2167,
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
                        "id": 2157,
                        "name": "ElementaryTypeName",
                        "src": "1579:7:5"
                      }
                    ],
                    "id": 2158,
                    "name": "VariableDeclaration",
                    "src": "1579:7:5"
                  }
                ],
                "id": 2159,
                "name": "ParameterList",
                "src": "1578:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2159
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2101,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 2160,
                            "name": "Identifier",
                            "src": "1605:20:5"
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
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5469,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2161,
                                "name": "Identifier",
                                "src": "1626:9:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2155,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 2162,
                                "name": "Identifier",
                                "src": "1636:6:5"
                              }
                            ],
                            "id": 2163,
                            "name": "FunctionCall",
                            "src": "1626:17:5"
                          }
                        ],
                        "id": 2164,
                        "name": "IndexAccess",
                        "src": "1605:39:5"
                      }
                    ],
                    "id": 2165,
                    "name": "Return",
                    "src": "1598:46:5"
                  }
                ],
                "id": 2166,
                "name": "Block",
                "src": "1588:63:5"
              }
            ],
            "id": 2167,
            "name": "FunctionDefinition",
            "src": "1510:141:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressByIndex",
              "payable": false,
              "scope": 2182,
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
                      "name": "index",
                      "scope": 2181,
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
                        "id": 2168,
                        "name": "ElementaryTypeName",
                        "src": "2129:4:5"
                      }
                    ],
                    "id": 2169,
                    "name": "VariableDeclaration",
                    "src": "2129:10:5"
                  }
                ],
                "id": 2170,
                "name": "ParameterList",
                "src": "2128:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2181,
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
                        "id": 2171,
                        "name": "ElementaryTypeName",
                        "src": "2162:7:5"
                      }
                    ],
                    "id": 2172,
                    "name": "VariableDeclaration",
                    "src": "2162:7:5"
                  }
                ],
                "id": 2173,
                "name": "ParameterList",
                "src": "2161:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2173
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2101,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 2174,
                            "name": "Identifier",
                            "src": "2188:20:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2105,
                                  "type": "bytes32[256] storage ref",
                                  "value": "tokenSymbolHashList"
                                },
                                "id": 2175,
                                "name": "Identifier",
                                "src": "2209:19:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2169,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 2176,
                                "name": "Identifier",
                                "src": "2229:5:5"
                              }
                            ],
                            "id": 2177,
                            "name": "IndexAccess",
                            "src": "2209:26:5"
                          }
                        ],
                        "id": 2178,
                        "name": "IndexAccess",
                        "src": "2188:48:5"
                      }
                    ],
                    "id": 2179,
                    "name": "Return",
                    "src": "2181:55:5"
                  }
                ],
                "id": 2180,
                "name": "Block",
                "src": "2171:72:5"
              }
            ],
            "id": 2181,
            "name": "FunctionDefinition",
            "src": "2097:146:5"
          }
        ],
        "id": 2182,
        "name": "ContractDefinition",
        "src": "717:1528:5"
      }
    ],
    "id": 2183,
    "name": "SourceUnit",
    "src": "0:2246:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x47fcdc85c8e9825e0bbdd8c63af0babbe288ab56"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:49:37.118Z"
}