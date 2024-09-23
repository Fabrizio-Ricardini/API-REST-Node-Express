export const PORT = process.env.PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD || "yourStrong#Password";
export const DB_SERVER = process.env.DB_SERVER;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_ENCRYPT = process.env.DB_ENCRYPT || false;
export const DB_TRUST = process.env.DB_TRUST || true;

console.log( "esto es env",process.env.HELLO);