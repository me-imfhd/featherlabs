export type FeatherAssets = {
  "version": "0.1.0",
  "name": "feather_assets",
  "constants": [
    {
      "name": "GROUP_DATA_SEED",
      "type": "bytes",
      "value": "[103, 114, 111, 117, 112, 95, 100, 97, 116, 97]"
    },
    {
      "name": "GROUP_SEED",
      "type": "bytes",
      "value": "[103, 114, 111, 117, 112]"
    },
    {
      "name": "SEED",
      "type": "bytes",
      "value": "[102, 101, 97, 116, 104, 101, 114, 95, 97, 115, 115, 101, 116, 115]"
    }
  ],
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "CreateGroupArgsV1"
          }
        }
      ]
    },
    {
      "name": "updateGroupMaxSize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "maxSize",
          "type": "u32"
        }
      ]
    },
    {
      "name": "addMetadataToGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "GroupMetadataArgsV1"
          }
        }
      ]
    },
    {
      "name": "updateGroupMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "UpdateGroupMetadataArgsV1"
          }
        }
      ]
    },
    {
      "name": "transferGroupAuthority",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        }
      ]
    }
  ],
  "types": [
    {
      "name": "LightRootParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inputs",
            "type": {
              "vec": "bytes"
            }
          },
          {
            "name": "proof",
            "type": {
              "defined": ""
            }
          },
          {
            "name": "merkleContext",
            "type": {
              "defined": "PackedMerkleContext"
            }
          },
          {
            "name": "merkleTreeRootIndex",
            "type": "u16"
          },
          {
            "name": "addressMerkleContext",
            "type": {
              "defined": "PackedAddressMerkleContext"
            }
          },
          {
            "name": "addressMerkleTreeRootIndex",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "AttributeV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "string"
          },
          {
            "name": "value",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "CreateGroupArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxSize",
            "type": "u32"
          },
          {
            "name": "metadata",
            "type": {
              "option": {
                "defined": "GroupMetadataArgsV1"
              }
            }
          }
        ]
      }
    },
    {
      "name": "GroupMetadataArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "mutable",
            "type": "bool"
          },
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "AttributeV1"
              }
            }
          }
        ]
      }
    },
    {
      "name": "UpdateGroupMetadataArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "uri",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "attributes",
            "type": {
              "option": {
                "vec": {
                  "defined": "AttributeV1"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "PackedAddressMerkleContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "addressMerkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "addressQueuePubkeyIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "PackedMerkleContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "merkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "nullifierQueuePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "leafIndex",
            "type": "u32"
          },
          {
            "name": "queueIndex",
            "docs": [
              "Index of leaf in queue. Placeholder of batched Merkle tree updates",
              "currently unimplemented."
            ],
            "type": {
              "option": {
                "defined": "QueueIndex"
              }
            }
          }
        ]
      }
    },
    {
      "name": "QueueIndex",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "queueId",
            "docs": [
              "Id of queue in queue account."
            ],
            "type": "u8"
          },
          {
            "name": "index",
            "docs": [
              "Index of compressed account hash in queue."
            ],
            "type": "u16"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CustomError",
      "msg": "Custom error message"
    },
    {
      "code": 6001,
      "name": "InvalidMaxSize",
      "msg": "Invalid Max Size, there are existing members"
    },
    {
      "code": 6002,
      "name": "InvalidGroupSigner",
      "msg": "Unauthorized group signer"
    },
    {
      "code": 6003,
      "name": "ArgumentsNotFound",
      "msg": "No Update Inputs found"
    }
  ]
};

export const IDL: FeatherAssets = {
  "version": "0.1.0",
  "name": "feather_assets",
  "constants": [
    {
      "name": "GROUP_DATA_SEED",
      "type": "bytes",
      "value": "[103, 114, 111, 117, 112, 95, 100, 97, 116, 97]"
    },
    {
      "name": "GROUP_SEED",
      "type": "bytes",
      "value": "[103, 114, 111, 117, 112]"
    },
    {
      "name": "SEED",
      "type": "bytes",
      "value": "[102, 101, 97, 116, 104, 101, 114, 95, 97, 115, 115, 101, 116, 115]"
    }
  ],
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "CreateGroupArgsV1"
          }
        }
      ]
    },
    {
      "name": "updateGroupMaxSize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "maxSize",
          "type": "u32"
        }
      ]
    },
    {
      "name": "addMetadataToGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "GroupMetadataArgsV1"
          }
        }
      ]
    },
    {
      "name": "updateGroupMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        },
        {
          "name": "args",
          "type": {
            "defined": "UpdateGroupMetadataArgsV1"
          }
        }
      ]
    },
    {
      "name": "transferGroupAuthority",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "selfProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cpiSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lightSystemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registeredProgramPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "noopProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accountCompressionAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lrp",
          "type": {
            "defined": "LightRootParams"
          }
        },
        {
          "name": "groupSeed",
          "type": "u64"
        }
      ]
    }
  ],
  "types": [
    {
      "name": "LightRootParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inputs",
            "type": {
              "vec": "bytes"
            }
          },
          {
            "name": "proof",
            "type": {
              "defined": ""
            }
          },
          {
            "name": "merkleContext",
            "type": {
              "defined": "PackedMerkleContext"
            }
          },
          {
            "name": "merkleTreeRootIndex",
            "type": "u16"
          },
          {
            "name": "addressMerkleContext",
            "type": {
              "defined": "PackedAddressMerkleContext"
            }
          },
          {
            "name": "addressMerkleTreeRootIndex",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "AttributeV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "string"
          },
          {
            "name": "value",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "CreateGroupArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxSize",
            "type": "u32"
          },
          {
            "name": "metadata",
            "type": {
              "option": {
                "defined": "GroupMetadataArgsV1"
              }
            }
          }
        ]
      }
    },
    {
      "name": "GroupMetadataArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "mutable",
            "type": "bool"
          },
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "AttributeV1"
              }
            }
          }
        ]
      }
    },
    {
      "name": "UpdateGroupMetadataArgsV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "uri",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "attributes",
            "type": {
              "option": {
                "vec": {
                  "defined": "AttributeV1"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "PackedAddressMerkleContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "addressMerkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "addressQueuePubkeyIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "PackedMerkleContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "merkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "nullifierQueuePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "leafIndex",
            "type": "u32"
          },
          {
            "name": "queueIndex",
            "docs": [
              "Index of leaf in queue. Placeholder of batched Merkle tree updates",
              "currently unimplemented."
            ],
            "type": {
              "option": {
                "defined": "QueueIndex"
              }
            }
          }
        ]
      }
    },
    {
      "name": "QueueIndex",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "queueId",
            "docs": [
              "Id of queue in queue account."
            ],
            "type": "u8"
          },
          {
            "name": "index",
            "docs": [
              "Index of compressed account hash in queue."
            ],
            "type": "u16"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CustomError",
      "msg": "Custom error message"
    },
    {
      "code": 6001,
      "name": "InvalidMaxSize",
      "msg": "Invalid Max Size, there are existing members"
    },
    {
      "code": 6002,
      "name": "InvalidGroupSigner",
      "msg": "Unauthorized group signer"
    },
    {
      "code": 6003,
      "name": "ArgumentsNotFound",
      "msg": "No Update Inputs found"
    }
  ]
};
