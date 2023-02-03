const mongoos = require("mongoose");

const launchesSchema = new mongoos.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    launchDate: {type: Date},
    target: {
        type: true,
        required: true,
    },
    customers:
    [{
        type:String
    }],
    upcoming: {
        type: Boolean,
        required: true,
        default: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    },
});

export default launchesSchema;