const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "setup_db",
        description: "setup_db"
    })
})

module.exports = app
