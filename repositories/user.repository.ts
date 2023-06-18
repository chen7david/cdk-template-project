import { UserModel } from "../models/user.model"

export const UserRepository = {
    getAll: async () => {
        return UserModel.scan()
    }
}