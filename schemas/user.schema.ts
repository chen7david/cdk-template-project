import { Schema,  } from 'dynamoose'
import { CompositeKeySchemaAttributes, tableOptions } from './default.schema'
import { SchemaDefinition } from 'dynamoose/dist/Schema'

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

export const UserSchema = new Schema(schema, tableOptions)