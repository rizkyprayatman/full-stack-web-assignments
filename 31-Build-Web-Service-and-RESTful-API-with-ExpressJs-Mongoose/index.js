const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/Task');
const Instructors = require("./controllers/Instructors")
const Courses = require("./controllers/Courses")
const Participants = require("./controllers/Participants")

require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const ready = {
        status: "Selamat datang wahai pengunjung yang budiman",
    }

    res.status(200).send(ready)
})

// API Instructor Endpoints
app
  .route('/instructors')
  .get(Instructors.listAllInstructor)
  .post(Instructors.createNewInstructor);

app
  .route('/instructors/:instructorid')
  .get(Instructors.readInstructor)
  .put(Instructors.updateInstructor)
  .delete(Instructors.deleteInstructor);

// API Courses Endpoints
app
  .route('/courses')
  .get(Courses.listAllCourses)
  .post(Courses.createNewCourses);

app
  .route('/courses/:coursesid')
  .get(Courses.readCourses)
  .put(Courses.updateCourses)
  .delete(Courses.deleteCourses);

// API Participant Endpoints
app
  .route('/participants')
  .get(Participants.listAllParticipant)
  .post(Participants.createNewParticipant);

app
  .route('/participants/:participantid')
  .get(Participants.readParticipant)
  .put(Participants.updateParticipant)
  .delete(Participants.deleteParticipant);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});