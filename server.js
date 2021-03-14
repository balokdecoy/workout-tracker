const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const API = require("./public/api");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("seeders"));

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/workout", 
    { useNewUrlParser: true }
);

require("./routes/html-routes")(app);
require("./routes/workout-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});