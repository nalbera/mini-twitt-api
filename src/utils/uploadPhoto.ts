import randomString from 'randomstring';
import path from 'path';
import sharp from 'sharp';

import createFolderIfNotExists from './createFolderIfNotExists';

const uploadPhoto = async (photo: any) => {
       
    //console.log(photo.name);
    const image = sharp(photo.data);
    image.resize(500);

    const randomName = randomString.generate({
        length: 12,
        charset: 'alphabetic'
    });

    const imageName = `${randomName}_${photo.name}`
    
    const uploadsDir = path.join(process.cwd(),'./src/uploads');

    await createFolderIfNotExists(uploadsDir);

    await image.toFile(path.join(uploadsDir, imageName));
    
    return imageName;
}

export default uploadPhoto;