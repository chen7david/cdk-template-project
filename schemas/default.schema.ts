import { TimestampObject } from 'dynamoose/dist/Schema';
import { SchemaDefinition } from 'dynamoose/dist/Schema'

interface SchemaSettings {
    timestamps?: boolean | TimestampObject;
    saveUnknown?: boolean | string[];
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
        required: true,
    },
}

export const tableOptions: SchemaSettings = {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    saveUnknown: false
}