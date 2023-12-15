import fs from 'fs/promises';
import path from 'path';

const deletePhotoUtil = async (photo: any) => {
    
    const filePath = path.join(process.cwd(),'./src/uploads', photo);

    try {
        await fs.unlink(filePath);
    } catch (error) {
        console.log(error);
    }
};

export default deletePhotoUtil;