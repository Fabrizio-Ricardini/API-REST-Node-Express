import sql from 'mssql'
import { DB_USER, DB_PASSWORD, DB_SERVER, DB_DATABASE, DB_ENCRYPT, DB_TRUST } from '../config.js'


const dbSettings = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_SERVER,
    database: DB_DATABASE,
    options: {
        encrypt: DB_ENCRYPT,
        trustServerCertificate: DB_TRUST
    }
}

export const getConnection = async () => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(err){
        console.log(err);
    }
}
