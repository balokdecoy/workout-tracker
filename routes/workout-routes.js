// const db = require("../models/Workouts");
const Workout = require("../models/Workouts")
module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then((Workouts) => {
            res.json(Workouts);
       }).catch((error) => {
           res.json(error)
       })
});

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

   app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((Workouts) => {
        res.json(Workouts);
   }).catch((error) => {
       res.json(error)
   })
});

};