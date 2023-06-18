import dynamoose from "../lib/clients/dynamoose"
import { ProjectConfig } from '../config'
import { IUserSchema, UserSchema } from "../schemas/user.schema"

export const UserModel = dynamoose.model<IUserSchema>(ProjectConfig.tableName, UserSchema, {
    create: false,
    waitForActive: { enabled: false },
})