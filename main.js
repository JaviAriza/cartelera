const requestURL = 'json/circuitos.json';

//función asincrona

// si usamos async dentro podemos usar await(promesa)

async function fetchCircuitsJson() {
    const response = await fetch(requestURL); //realiza solicitud http para obtener archivo json
    const circuits = await response.json();
    return circuits;
}

fetchCircuitsJson().then(circuits => {
    for (let index = 0; index < circuits.tracks.length; index++) {
            const circuitsSection = document.getElementById('circuitSection');

            let id = circuits.tracks[index].id;
            let name = circuits.tracks[index].name;
            let date = circuits.tracks[index].date;
            let totalLength = circuits.tracks[index].totalLength;
            let trackWidth = circuits.tracks[index].trackWidth;
            let longestStraight = circuits.tracks[index].longestStraight;
            let rightCurves = circuits.tracks[index].rightCurves;
            let leftCurves = circuits.tracks[index].leftCurves;
            let topSpeed = circuits.tracks[index].topSpeed;
            let record = circuits.tracks[index].record;
            let image = circuits.tracks[index].image;
            let information = circuits.tracks[index].information;
            //todos los atributos de el json

            circuitSection.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
            </div>
            </div>`
        }   
    })