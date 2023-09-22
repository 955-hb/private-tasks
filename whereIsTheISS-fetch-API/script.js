

const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const name = data.name;
    const latitude = data.latitude;
    const longitude = data.longitude;
    
    //ausgabe
    document.getElementById('name').textContent = name;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;



    console.log(data);
    console.log(data.latitude);
    console.log(data.longitude);
}

getISS();