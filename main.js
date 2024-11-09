const requestURL = 'json/circuitos.json';

async function fetchCircuitsJson() {
    const response = await fetch(requestURL);
    const circuits = await response.json();
    return circuits;
}

fetchCircuitsJson().then(circuits => {
    const circuitSection = document.getElementById('circuitSection');

    circuits.tracks.forEach(track => {
        let { id, name, date, totalLength, trackWidth, longestStraight, rightCurves, leftCurves, topSpeed, record, image, information } = track;

        // Crear la tarjeta HTML
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
    
        <div class="card h-100 shadow-sm" role="button">
            <div class="ImgContainer overflow-hidden" style="height: 200px;">
                <img src="${image}" class="card-img-top w-100 h-100 img-cover" alt="${name}">
            </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Fecha: ${date}</p>
                    <p class="card-text">Longitud total: ${totalLength}</p>
                    <p class="card-text">Ancho de pista: ${trackWidth}</p>
                    <p class="card-text">Recta más larga: ${longestStraight}</p>
                    <p class="card-text">Curvas a la derecha: ${rightCurves}</p>
                    <p class="card-text">Curvas a la izquierda: ${leftCurves}</p>
                    <p class="card-text">Velocidad máxima: ${topSpeed}</p>
                    <p class="card-text">Récord: ${record}</p>
                </div>
            </div>
        `;

        // Evento para mostrar el modal con la información completa de la tarjeta
        card.querySelector('.card').addEventListener('click', () => {
            document.getElementById('circuitModalLabel').textContent = name;
            document.getElementById('modalImage').src = image;
            document.getElementById('modalDate').textContent = `Fecha: ${date}`;
            document.getElementById('modalTotalLength').textContent = `Longitud total: ${totalLength}`;
            document.getElementById('modalTrackWidth').textContent = `Ancho de pista: ${trackWidth}`;
            document.getElementById('modalLongestStraight').textContent = `Recta más larga: ${longestStraight}`;
            document.getElementById('modalRightCurves').textContent = `Curvas a la derecha: ${rightCurves}`;
            document.getElementById('modalLeftCurves').textContent = `Curvas a la izquierda: ${leftCurves}`;
            document.getElementById('modalTopSpeed').textContent = `Velocidad máxima: ${topSpeed}`;
            document.getElementById('modalRecord').textContent = `Récord: ${record}`;
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
