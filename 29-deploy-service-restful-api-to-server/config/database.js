import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "mysql",
  host: "sql6.freemysqlhosting.net",
  database: "sql6462347",
  username: "sql6462347",
  password: "xDJ9KqYyqa",
});

export default db;
