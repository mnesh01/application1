require('dotenv').config();
const pool = require('./db');

const testDB = async () => {
    try {
        console.log("Connecting with:", {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        });

        const res = await pool.query("SELECT NOW()");
        console.log("✅ PostgreSQL connected at:", res.rows[0].now);
    } catch (err) {
        console.error("❌ Database connection error:", err);
    } finally {
        await pool.end(); 
    }
};

testDB();
