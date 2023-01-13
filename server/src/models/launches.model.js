const launches = new Map();
nextFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: "Kepler-442 b",
    customer: ["NASA", "CHII"],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

const existLaunch=(idL)=>{
    return (launches.has(idL));
}

const allLaunches = () => {
    return (Array.from(launches.values()));
}
const newLaunch = (launch) => {
    nextFlightNumber++;
    launches.set(
        nextFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ["NASA", "CHII"],
            flightNumber: nextFlightNumber,
        })
    );
}

const abortLaunchModel=(idLaunch)=>{
    const abort = launches.get(idLaunch);
    abort.upcoming = false;
    abort.success = false;
    return abort;
}


module.exports = {
    existLaunch,
    allLaunches,
    newLaunch,
    abortLaunchModel,
}
