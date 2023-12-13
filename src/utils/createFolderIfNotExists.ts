import fs from 'fs/promises';

const createFolderIfNotExists = async (path: string) => {
    try {
        await fs.access(path);
    } catch (error) {
        await fs.mkdir(path);
    }
} 

export default createFolderIfNotExists;