require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev"

const IS_TESTING = process.env.NODE_ENV === "test";


function getDatabaseUru() {
    const dbUser = process.env.DATABASE_USER || "postgres";
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres";
    const dbHost = process.env.DATABASE_HOST || "localhost";
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "lifetracker_regis";


     return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

}

const BCRYPT_WORK_FACTOR = 13;

console.log("Lifetracker Config:".green);
console.log("PORT:".blue, PORT);
console.log("SECRET_KEY:".blue, SECRET_KEY);
console.log("IS_TESTING:".blue, IS_TESTING);
console.log("Database URI:".blue, getDatabaseUru());

module.exports = {
    PORT,
    SECRET_KEY,
    IS_TESTING,
    BCRYPT_WORK_FACTOR,
    getDatabaseUru,
};
