import { createPool } from "mysql2/promise";
import { config } from 'dotenv';

config();

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "orquideas"
});

