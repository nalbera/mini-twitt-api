import { User } from "../../models";

const getUserByIdService = async (id: number): Promise<User | undefined> => {

    const user = await User.findByPk(id,{
        attributes: ['id','email','avatar','active','createdAt']
    });

    if(!user) return undefined;

    return user;
}

export default getUserByIdService;