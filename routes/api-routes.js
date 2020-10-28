var routes = require("express").Router()
//link by looking at the front end java script file (start with api.js file because it has the routes)

var db = require("../models/workoutmodels") //by having this line, Mongoose take care of creating the db and the collection!
routes.get("/api/workouts", function (req, res) {
    db.find()
        .then(function (records) {
            console.log("get route", records)
            res.json(records)
        })
})
routes.put("/api/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(function (records) {
            console.log("put route", records)
            res.json(records)
        })
})
routes.post("/api/workouts", function (req, res) {
    db.create(req.body)
        .then(function (records) {
            console.log("post route", records)
            res.json(records)
        })
})
routes.get("/api/workouts", function (req, res) {
    db.find({}).limit(15)
        .then(function (records) {
            console.log("get range route", records)
            res.json(records)
        })
})

routes.get("/api/workouts/range", function (req, res) {
    Workout.find({}).limit(15)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = routes