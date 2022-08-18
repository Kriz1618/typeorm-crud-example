import { DataSource } from "typeorm";
import { User, Note } from "./entities/";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "restcrud",
  synchronize: true,
  logging: false,
  entities: [User, Note],
});