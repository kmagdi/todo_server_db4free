import * as dotenv from 'dotenv';
dotenv.config();

export const configDB={
        host     : process.env.MYSQL_HOST || 'localhost',
        user     : process.env.MYSQL_USERNAME || 'root',
        password : process.env.MYSQL_PASSWORD || '',
        database : process.env.MYSQL_DATABASE || 'books'
}
//MYSQL_USERNAME="czf3fhh3dirhct1d"
/*console.log('process.env.MYSQL_HOST:',process.env.MYSQL_HOST);
console.log('process.env.MYSQL_USERNAME:',process.env.USERNAME,process.env.MYSQL_PASSWORD);
console.log('process.env.MYSQL_DATABASE:',process.env.MYSQL_DATABASE);
console.log('process.env.PORT:',process.env.PORT);*/
//console.log("Database_URL", process.env.DATABASE_URL);

/*export const configDB={
        host     :'localhost',
        user     : 'root',
        password : '',
        database:'todo'
}*/
console.log('a használt adatbázis szolgáltató:',configDB.host)