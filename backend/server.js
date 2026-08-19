const express = require("express");

const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "CI/CD Pipeline Backend Running Successfully!"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});