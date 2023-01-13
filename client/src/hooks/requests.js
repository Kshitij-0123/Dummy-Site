const API_URL = 'http://localhost:5000'
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const fetchedData =  await response.json();
  return fetchedData.sort((a,b)=> a.flightNumber-b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`,{
      headers: {
      "Content-Type":"application/json",
      },
      method: "post",
      body:JSON.stringify(launch),
    })
  }
  catch(err){
    return{
      ok:false,
    }
  }
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API_URL}/launches/${id}`,{
      headers: {
      "Content-Type":"application/json",
      },
      method: "delete",
    })
  }
  catch(err){
    console.log(err);
    return {
      ok:false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};