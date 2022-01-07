const Courses = require("../models/CoursesMod");
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let Timestamp =
  year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

class CoursesAPI {
  static async listAllCourses(req, res) {
    Courses.find({}, (err, Courses) => {
      if (err) {
        res.status(500).send({
          meta: {
            status: "Error",
            message: "Get All Courses",
            time: Timestamp,
          },
          data: {
            Courses: err,
          },
        });
      }
      res.status(200).json({
        meta: {
          status: "Success",
          message: "Get All Courses",
          time: Timestamp,
        },
        data: {
          Courses: Courses,
        },
      });
    }).populate("instructor");
  }

  static async createNewCourses(req, res) {
    let newCourses = new Courses(req.body);
    newCourses.save((err, Courses) => {
      if (err) {
        res.status(500).send({
          meta: {
            status: "Error",
            message: "Post Courses",
            time: Timestamp,
          },
          data: {
            Courses: err,
          },
        });
      }
      res.status(201).json({
        meta: {
          status: "Success",
          message: "Post Courses",
          time: Timestamp,
        },
        data: {
          Courses: newCourses,
        },
      });
    });
  }

  static async readCourses(req, res) {
    Courses.findById(req.params.coursesid, (err, Courses) => {
      if (err) {
        res.status(500).send({
          meta: {
            status: "Error",
            message: "Get Courses by Id",
            time: Timestamp,
          },
          data: {
            Courses: err,
          },
        });
      }
      res.status(200).json({
        meta: {
          status: "Success",
          message: "Get Courses by Id",
          time: Timestamp,
        },
        data: {
          Courses: Courses,
        },
      });
    }).populate("instructor");
  }

  static async updateCourses(req, res) {
    Courses.findOneAndUpdate(
      { _id: req.params.coursesid },
      req.body,
      { new: true },
      (err, Courses) => {
        if (err) {
          res.status(500).send({
            meta: {
              status: "Error",
              message: "Updated Courses",
              time: Timestamp,
            },
            data: {
              Courses: err,
            },
          });
        }
        res.status(200).json({
          meta: {
            status: "Success",
            message: "Updated Courses",
            time: Timestamp,
          },
          data: {
            Courses: Courses,
          },
        });
      }
    );
  }

   static async deleteCourses(req, res) {
    Courses.findByIdAndRemove({ _id: req.params.coursesid }, (err, Courses) => {
      if (err) {
        res.status(404).send({
          meta: {
            status: "Error",
            message: "Delete Courses",
            time: Timestamp,
          },
          data: {
            Courses: err,
          },
        });
      }
      res.status(200).json({
        meta: {
          status: "Success",
          message: "Delete Courses",
          time: Timestamp,
        },
        data: {
          Courses: Courses,
        },
      });
    });
  }
}

module.exports = CoursesAPI;