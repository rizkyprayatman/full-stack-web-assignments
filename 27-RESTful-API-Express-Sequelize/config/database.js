import { Sequelize } from "sequelize";

const db = new Sequelize("hewan_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
