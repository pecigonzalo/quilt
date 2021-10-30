import type { IntrospectionQuery } from 'graphql'

export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'AccessCountForDate',
        fields: [
          {
            name: 'date',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Datetime',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Int',
      },
      {
        kind: 'OBJECT',
        name: 'AccessCounts',
        fields: [
          {
            name: 'total',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'counts',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccessCountForDate',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'String',
      },
      {
        kind: 'SCALAR',
        name: 'Boolean',
      },
      {
        kind: 'UNION',
        name: 'BucketAddResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'BucketAddSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'BucketAlreadyAdded',
          },
          {
            kind: 'OBJECT',
            name: 'BucketDoesNotExist',
          },
          {
            kind: 'OBJECT',
            name: 'BucketFileExtensionsToIndexInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'BucketIndexContentBytesInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'InsufficientPermissions',
          },
          {
            kind: 'OBJECT',
            name: 'NotificationConfigurationError',
          },
          {
            kind: 'OBJECT',
            name: 'NotificationTopicNotFound',
          },
          {
            kind: 'OBJECT',
            name: 'SnsInvalid',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'BucketAddSuccess',
        fields: [
          {
            name: 'bucketConfig',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'BucketConfig',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketAlreadyAdded',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketConfig',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'iconUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'linkedData',
            type: {
              kind: 'SCALAR',
              name: 'Json',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'overviewUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'tags',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            args: [],
          },
          {
            name: 'relevanceScore',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'lastIndexed',
            type: {
              kind: 'SCALAR',
              name: 'Datetime',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'snsNotificationArn',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'scannerParallelShardsDepth',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'skipMetaDataIndexing',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'fileExtensionsToIndex',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            args: [],
          },
          {
            name: 'indexContentBytes',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'permissions',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'RoleBucketPermission',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketConfigDoesNotExist',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketDoesNotExist',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketFileExtensionsToIndexInvalid',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketIndexContentBytesInvalid',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'BucketNotFound',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'BucketRemoveResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'BucketRemoveSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'BucketNotFound',
          },
          {
            kind: 'OBJECT',
            name: 'IndexingInProgress',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'BucketRemoveSuccess',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'BucketUpdateResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'BucketUpdateSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'BucketFileExtensionsToIndexInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'BucketIndexContentBytesInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'BucketNotFound',
          },
          {
            kind: 'OBJECT',
            name: 'NotificationConfigurationError',
          },
          {
            kind: 'OBJECT',
            name: 'NotificationTopicNotFound',
          },
          {
            kind: 'OBJECT',
            name: 'SnsInvalid',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'BucketUpdateSuccess',
        fields: [
          {
            name: 'bucketConfig',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'BucketConfig',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Config',
        fields: [
          {
            name: 'contentIndexingSettings',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ContentIndexingSettings',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ContentIndexingSettings',
        fields: [
          {
            name: 'extensions',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'bytesDefault',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'bytesMin',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'bytesMax',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Datetime',
      },
      {
        kind: 'OBJECT',
        name: 'IndexingInProgress',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InsufficientPermissions',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Json',
      },
      {
        kind: 'SCALAR',
        name: 'JsonRecord',
      },
      {
        kind: 'OBJECT',
        name: 'ManagedRole',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'arn',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'permissions',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'RoleBucketPermission',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'ID',
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'bucketAdd',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'BucketAddResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'bucketUpdate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'BucketUpdateResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'bucketRemove',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'BucketRemoveResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
            ],
          },
          {
            name: 'roleCreateManaged',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'RoleCreateResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'roleCreateUnmanaged',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'RoleCreateResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'roleUpdateManaged',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'RoleUpdateResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
              },
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'roleUpdateUnmanaged',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'RoleUpdateResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
              },
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'roleDelete',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'RoleDeleteResult',
                ofType: null,
              },
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'NotificationConfigurationError',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'NotificationTopicNotFound',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Package',
        fields: [
          {
            name: 'bucket',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'modified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Datetime',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'revisions',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PackageRevisionList',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'accessCounts',
            type: {
              kind: 'OBJECT',
              name: 'AccessCounts',
              ofType: null,
            },
            args: [
              {
                name: 'window',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PackageEntryList',
        fields: [
          {
            name: 'total',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalBytes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PackageList',
        fields: [
          {
            name: 'total',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'page',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Package',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'number',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              {
                name: 'perPage',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PackageRevision',
        fields: [
          {
            name: 'hash',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'modified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Datetime',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'isLatest',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'message',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'metadata',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'JsonRecord',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'entries',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PackageEntryList',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'accessCounts',
            type: {
              kind: 'OBJECT',
              name: 'AccessCounts',
              ofType: null,
            },
            args: [
              {
                name: 'window',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PackageRevisionList',
        fields: [
          {
            name: 'total',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'page',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PackageRevision',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'number',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              {
                name: 'perPage',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'config',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Config',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'bucketConfigs',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'BucketConfig',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'bucketConfig',
            type: {
              kind: 'OBJECT',
              name: 'BucketConfig',
              ofType: null,
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
            ],
          },
          {
            name: 'packages',
            type: {
              kind: 'OBJECT',
              name: 'PackageList',
              ofType: null,
            },
            args: [
              {
                name: 'bucket',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
              {
                name: 'filter',
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            ],
          },
          {
            name: 'package',
            type: {
              kind: 'OBJECT',
              name: 'Package',
              ofType: null,
            },
            args: [
              {
                name: 'bucket',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
            ],
          },
          {
            name: 'roles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'UNION',
                    name: 'Role',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'UNION',
              name: 'Role',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'Role',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'UnmanagedRole',
          },
          {
            kind: 'OBJECT',
            name: 'ManagedRole',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'RoleAssigned',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleBucketPermission',
        fields: [
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'Role',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'bucket',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'BucketConfig',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'level',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'RoleCreateResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'RoleCreateSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameReserved',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameExists',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'BucketConfigDoesNotExist',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'RoleCreateSuccess',
        fields: [
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'Role',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'RoleDeleteResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'RoleDeleteSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'RoleDoesNotExist',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameReserved',
          },
          {
            kind: 'OBJECT',
            name: 'RoleAssigned',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'RoleDeleteSuccess',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleDoesNotExist',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleIsManaged',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleIsUnmanaged',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleNameExists',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleNameInvalid',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'RoleNameReserved',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'UNION',
        name: 'RoleUpdateResult',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'RoleUpdateSuccess',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameReserved',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameExists',
          },
          {
            kind: 'OBJECT',
            name: 'RoleNameInvalid',
          },
          {
            kind: 'OBJECT',
            name: 'RoleIsManaged',
          },
          {
            kind: 'OBJECT',
            name: 'RoleIsUnmanaged',
          },
          {
            kind: 'OBJECT',
            name: 'BucketConfigDoesNotExist',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'RoleUpdateSuccess',
        fields: [
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'UNION',
                name: 'Role',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'SnsInvalid',
        fields: [
          {
            name: '_',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UnmanagedRole',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'arn',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery
