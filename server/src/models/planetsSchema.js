const mongoos = require("mongoose");

const planetsSchema = new mongoos.Schema({
    keplerName: {
        type: String,
        required: true,
    },
});

export default planetsSchema;