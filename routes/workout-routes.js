// Require workout model
const Workout = require("../models/Workouts")

module.exports = (app) => {

    // Find all workout data
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then((Workouts) => {
            res.json(Workouts);
       }).catch((error) => {
           res.json(error)
       })
});

    // Create a workout based on user exercise inputs
    app.post("/api/workouts", (req, res) => {
        Workout.create({
            exercises: [
                req.body,
            ]
        }).then((Workouts) => {
             res.json(Workouts);
        }).catch((error) => {
            res.json(error)
        } )
    });

    // Add exercise to workouts array 
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $push: { exercises: req.body }
        
            },
            {
                new: true,
            },
    ).then((Workouts) => {
        res.json(Workouts);
   }).catch((error) => {
       res.json(error)
   } )});

   // Retrieve workout range data from database
   app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((Workouts) => {
        res.json(Workouts);
   }).catch((error) => {
       res.json(error)
   })
});

};