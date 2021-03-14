// Import required path dependency
const path = require("path");

module.exports = (app) => {

    // Set home route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    //set exercises update page route
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    // set stats dashboard route
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}