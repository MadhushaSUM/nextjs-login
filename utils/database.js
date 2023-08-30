import mysql from "mysql2/promise";

 
export async function query({ query, values = [] }) {
    const db = await mysql.createConnection({
        host: process.env.DB_URL,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });


    try {
        const [results] = await db.query(query, values);
        db.end();
        return results;        
    } catch (error) {
        throw Error(error.message);
    }
}