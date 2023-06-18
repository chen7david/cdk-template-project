import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as dynamoose from 'dynamoose'
import { SchemaDefinition } from 'dynamoose/dist/Schema'
import { TimestampObject } from 'dynamoose/dist/Schema'
import { Item } from 'dynamoose/dist/Item'

export interface ICommonAttributes extends Item {
  pk: string
  sk: string
  createDate: string
  updateDate: string
  updatedBy: string
}

interface ISchemaSettings {
  timestamps?: boolean | TimestampObject
  saveUnknown?: boolean | string[]
}

export const CompositeKeySchemaAttributes: SchemaDefinition = {
  pk: {
    hashKey: true,
    required: true,
    type: String
  },
  sk: {
    rangeKey: true,
    required: true,
    type: String
  },
  updatedBy: {
    type: String,
    required: true
  }
}

export const tableOptions: ISchemaSettings = {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  saveUnknown: false
}
export interface IUserSchema extends ICommonAttributes {
  username: string
  email: string
  password: string
}

const schema: SchemaDefinition = {
  ...CompositeKeySchemaAttributes,
  username: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
}

export const UserSchema = new dynamoose.Schema(schema, tableOptions)

export const UserModel = dynamoose.model<IUserSchema>(
  'project-example-table',
  UserSchema,
  {
    create: false,
    waitForActive: { enabled: false }
  }
)

export const UserRepository = {
  getAll: async () => {
    return UserModel.scan()
  }
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const items = await UserRepository.getAll()
  console.log({ event, tableName: process.env.TABLE_NAME, items })
  return {
    body: JSON.stringify(items),
    statusCode: 200
  }
}
