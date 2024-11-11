const requestURL = 'json/circuitos.json';

async function fetchCircuitsJson() {
    const response = await fetch(requestURL);
    const circuits = await response.json();
    return circuits;
}

fetchCircuitsJson().then(circuits => {
    const circuitSection = document.getElementById('circuitSection');

    circuits.tracks.forEach(track => {
        let { id, name, date, totalLength, trackWidth, longestStraight, rightCurves, leftCurves, topSpeed, record, image, information, country, icon} = track;

        // Crear la tarjeta HTML
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
     
    <div class="card h-100 shadow-sm" role="button" style="margin-top: 20px;">
        <div class="ImgContainer overflow-hidden" style="height: 400px; margin-left: 10px; margin-right: 10px;">
            <img src="${image}" class="card-img-top w-100 h-100 img-cover" alt="${name}">
        </div>
        <br>
        <hr style="border: 2px solid #000000; margin: 10px 0;">
        <div class="card-body d-flex flex-column">
            <p><h5 class="card-title" style="margin-top: -10px;text-align:center;"> <b>${name} </b></h5></p>
            <p class="card-text" style="text-align: center;">Date: ${date}</p>
            <p class="card-text" style="text-align: center;">Country: ${country} 
            <br>
            <img src="${icon}" style="width:48px;height:48px;"></p>
        </div>
    </div>
`;

// Iconos en info de tarjeta
let iconL = document.createElement('img');
iconL.src = 'images/icons/curvaL.png';
iconL.style.width = '25px';  
iconL.style.height = '25px'; 

let iconR = document.createElement('img');
iconR.src ='images/icons/curva.png';
iconR.style.width = '25px';  
iconR.style.height = '25px';

let iconCronometro = document.createElement('img');
iconCronometro.src='images/icons/cronografo.png';
iconCronometro.style.width = '25px';  
iconCronometro.style.height = '25px';

let iconKMH = document.createElement('img');
iconKMH.src='images/icons/kmh.png';
iconKMH.style.width = '25px';  
iconKMH.style.height = '25px';

let iconDistance = document.createElement('img');
iconDistance.src='images/icons/distancia.png';
iconDistance.style.width = '25px';  
iconDistance.style.height = '25px';

let iconWidth = document.createElement('img');
iconWidth.src='images/icons/dimensiones.png';
iconWidth.style.width = '25px';  
iconWidth.style.height = '25px';

let icondate = document.createElement('img');
icondate.src='images/icons/calendar-days.png';
icondate.style.width = '25px';  
icondate.style.height = '25px';

// Evento para mostrar el modal con la información completa de la tarjeta
card.querySelector('.card').addEventListener('click', () => {
    document.getElementById('circuitModalLabel').textContent = name;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDate').innerHTML = `Date: ${date} ${icondate.outerHTML}`;
    document.getElementById('modalTotalLength').innerHTML = `Total length: ${totalLength} ${iconDistance.outerHTML}`;
    document.getElementById('modalTrackWidth').innerHTML = `Track width: ${trackWidth} ${iconWidth.outerHTML}`;
    document.getElementById('modalLongestStraight').textContent = `Longest straight: ${longestStraight}`;
    // Usar innerHTML para insertar el icono y los textos de las curvas
    document.getElementById('modalCurves').innerHTML = `Curves: To rigth ${iconR.outerHTML}: ${rightCurves} | To left ${iconL.outerHTML}: ${leftCurves}`;
    document.getElementById('modalTopSpeed').innerHTML = `Top speed: ${topSpeed} ${iconKMH.outerHTML}`;
    document.getElementById('modalRecord').innerHTML = `Record : ${record} ${iconCronometro.outerHTML}`;
    document.getElementById('modalInformation').textContent = information;

    // Inicializar y mostrar el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('circuitModal'));
    modal.show();
});

// Añadir la tarjeta a la sección
circuitSection.appendChild(card);
    });
}).catch(error => {
    console.error('Error al cargar los datos:', error);
});
