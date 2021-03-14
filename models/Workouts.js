const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workouts = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {   type: {
            type: String,
            trim: true,
        },
            name: {
            type: String,
            trim: true,
        },
            duration: {
            type: Number,
        },
            weight: {
            type: Number,
        },
            reps: {
            type: Number,
        },
            sets: {
            type: Number,
        },
            distance: {
            type: Number,
            
        }}
    ]
    }, 
    {
        toJSON: {virtuals: true},
    }
);

// Function produced with assistance from Amir Ashtinay. See README for credit details
Workouts.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        if (!exercise.duration) {
            return total;
        }
        return total + exercise.duration;
    },0)
})

const Workout = mongoose.model("Workout", Workouts);

module.exports = Workout;