const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workouts = new Schema({

    date: {
        type: Date,
        default: Date.now,
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
        }}
    ]

});

Workouts.set('toJSON', { getters: true, virtuals: false });

module.exports = Workouts;