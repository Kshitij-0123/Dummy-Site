const express = require("express");
const { getAllLaunches,postNewLaunch,abortLaunch } = require("./launches.controller");

const launchRouter=express.Router();

launchRouter.get("/",getAllLaunches);
launchRouter.post("/",postNewLaunch);
launchRouter.delete('/:id',abortLaunch);

module.exports = {
    launchRouter,
};