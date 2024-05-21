import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  DB_URL1: process.env.DB_URL,
};
