import { TimestampObject } from 'dynamoose/dist/Schema';
import { SchemaDefinition } from 'dynamoose/dist/Schema'
import { Item } from "dynamoose/dist/Item"

export interface ICommonAttributes extends Item {
    pk: string
    sk: string
    createDate: string
    updateDate: string
    updatedBy: string
}

interface ISchemaSettings {
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

export const tableOptions: ISchemaSettings = {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    saveUnknown: false
}