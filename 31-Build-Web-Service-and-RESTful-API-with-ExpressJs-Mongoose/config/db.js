const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = `${process.env.DB_URL}`;

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

require("../models/TaskMod");
require("../models/InstructorsMod");
require("../models/CoursesMod");
require("../models/ParticipantsMod");
