const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app);
const port = process.env.PORT || 5000;

async function launchServer() {
    await loadPlanetsData();
    server.listen(port,()=>{
        console.log(`Using port ${port}`);
    })
}

launchServer();