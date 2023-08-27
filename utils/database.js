import mysql from "mysql";

export const db = mysql.createConnection({
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})