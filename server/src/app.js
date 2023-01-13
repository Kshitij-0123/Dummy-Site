const path = require("path")
const cors = require('cors')
const express = require('express');
const morgan = require('morgan')
const planetRouter = require('./routes/planets/planets.router');
const { launchRouter } = require('./routes/launches/launches.router');

const app = express();
FRONTEND_URL = "http://localhost:3000";

app.use(cors({origin:FRONTEND_URL}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname,"..","public")));
app.use("/planets",planetRouter);
app.use("/launches",launchRouter);
app.get("/*",(req,res)=> res.sendFile(path.join(__dirname,"..","public","index.html")));

module.exports = app;