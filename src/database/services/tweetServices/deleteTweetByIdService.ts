import { Tweets } from "../../models";


const deleteTweetByIdService = async (id: number): Promise<void | undefined> => {
    
    await Tweets.destroy({
        where:{
            id: id
        }
    });

    return;
}

export default deleteTweetByIdService;