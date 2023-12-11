import { User } from "../../models";
import bcrypt from 'bcrypt';



const loginUserService = async (email: string, password: string): Promise<User | undefined> => {
    
    const user = await User.findOne(
        {
            where: {email}
        }
    );
    
    if(!user){
        return undefined;
    }
    
    const isValid = await bcrypt.compare(password, user.password ? user.password : '***');

    if(isValid){
        return user;
    }else{
        return undefined;
    }

}

export default loginUserService;