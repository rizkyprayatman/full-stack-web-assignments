
import { Sequelize } from "sequelize";

import db from "../config/database.js";
 

const { DataTypes } = Sequelize;
 

const Hewan = db.define('hewan', {

  nama: {
    type: DataTypes.STRING,
		allowNull: false
  },
  namaSpesies: {
    type: DataTypes.STRING,
		allowNull: false
  },
	umur: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
},{

  freezeTableName: true
});


export default Hewan;