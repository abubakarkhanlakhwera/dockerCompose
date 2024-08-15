const express = require("express");
const app = express();
const path = require("path");
const redis = require("redis");

const client = redis.createClient({
    url: 'redis://redis:6379'
});

const port = 8080;
client.connect().then(() => {
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "/views"));

    app.get("/", (req, res) => {
        res.render("home.ejs");
    });

    app.get("/rollDice", (req, res) => {
        let diceVal = Math.floor(Math.random() * 6) + 1;
        res.render("rollDice.ejs", { diceVal });
    });

    app.get("/ig/:username", (req, res) => {
        let { username } = req.params;
        const instaData = require("./data.json");
        const data = instaData[username];
        if (data) {
            res.render("instagram.ejs", { data });
        } else {
            res.status(404).render("error.ejs");
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
