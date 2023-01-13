const e = require("express");
// const { path } = require("path");

const { existLaunch,allLaunches,newLaunch,abortLaunchModel } = require("../../models/launches.model");

function getAllLaunches(req,res){
    return res.status(200).json(allLaunches());
}
function postNewLaunch(req,res){
    const launch = req.body;
    if(!launch.target ||!launch.rocket ||!launch.mission ||!launch.launchDate) return res.status(201).json({err:"Required Parameters Missing"});
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)) return res.status(201).json({err:"Date not valid"});
    newLaunch(launch);
    return res.status(201).json(launch);
}
function abortLaunch(req,res){
    const idLaunch = Number(req.params.id);
    console.log(req.params);
    if(!existLaunch(idLaunch)) return res.status(404).json({err:"Launch Not Found"});
    else return res.status(200).json(abortLaunchModel(idLaunch));
}

module.exports = {
    getAllLaunches,
    postNewLaunch,
    abortLaunch,
}