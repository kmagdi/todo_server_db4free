import * as dotenv from 'dotenv';
dotenv.config();

export const configDB={
        host     :  process.env.MYSQL_HOST,
        user     : process.env.MYSQL_USERNAME,
        password :process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
        port:3306
}
export const configDB2={
        host     : 'localhost' ,
        user     : 'root' ,
        password :'' ,
        database : 'todo' ,
        port:3306
}
console.log('a használt adatbázis szolgáltató:',configDB.host)