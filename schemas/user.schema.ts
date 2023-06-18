import dynamoose from './../lib/clients/dynamoose'
import { CompositeKeySchemaAttributes, ICommonAttributes, tableOptions } from './common.schema'
import { SchemaDefinition } from 'dynamoose/dist/Schema'

export interface IUserSchema extends ICommonAttributes{
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
    },
}

export const UserSchema = new dynamoose.Schema(schema, tableOptions)