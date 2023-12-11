import { User } from "../../models";
import bcrypt from 'bcrypt';

const insertUserService = async (email: string, password: string): Promise<User | undefined> => {

    const user = await User.findOne({where: { email }});

    if (!user){

        const hassedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({email: email, password: hassedPassword});

        return newUser;
    } 

    return;
}

export default insertUserService;