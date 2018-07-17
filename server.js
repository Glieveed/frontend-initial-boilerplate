const path = require("path");
const express = require("express");
const open = require("open");

const PUBLIC_DIR = path.join(__dirname, "public");
const PORT = 3000;
const app = express();

app.use(express.static(PUBLIC_DIR));

app.get("/", function (req, res) {
    res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error message: " + err);
    } else {
        console.log("Server started: http://localhost:" + PORT);
        open('http://localhost:' + PORT);
    }
});