const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//match exercise.html to this below
const workoutmodelsSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            distance: {
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
})

const Workoutmodels = mongoose.model("Workoutmodels", workoutmodelsSchema);

module.exports = Workoutmodels;