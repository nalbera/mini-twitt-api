import server from './src/server';
import { syncDB, testConnection } from './src/database/services/servicesDb';


const PORT = process.env.PORT || 3001;

testConnection().then( () => {
    syncDB().then( () => {
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        })
    })
})