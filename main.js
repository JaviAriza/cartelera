const requestURL = 'json/circuitos.json';

// Función asincrona para obtener los datos del JSON
async function fetchCircuitsJson() {
    const response = await fetch(requestURL); // Realiza solicitud HTTP para obtener archivo JSON
    const circuits = await response.json();
    return circuits;
}

fetchCircuitsJson().then(circuits => {
    const circuitSection = document.getElementById('circuitSection'); // Referencia al contenedor

    // Verifica que se obtuvieron los datos
    if (!circuits || !circuits.tracks) {
        console.error('No se encontraron circuitos.');
        return;
    }

    // Recorre los circuitos y crea las tarjetas
    circuits.tracks.forEach(track => {
        let { id, name, date, totalLength, trackWidth, longestStraight, rightCurves, leftCurves, topSpeed, record, image, information } = track;

        // Actualiza el HTML dinámicamente
        circuitSection.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Fecha: ${date}</p>
                        <p class="card-text">Longitud total: ${totalLength}</p>
                        <p class="card-text">Ancho de pista: ${trackWidth}</p>
                        <p class="card-text">Recta más larga: ${longestStraight}</p>
                        <p class="card-text">Curvas a la derecha: ${rightCurves}</p>
                        <p class="card-text">Curvas a la izquierda: ${leftCurves}</p>
                        <p class="card-text">Velocidad máxima: ${topSpeed}</p>
                        <p class="card-text">Récord: ${record}</p>
                        <p class="card-text">Información: ${information}</p>
                    </div>
                </div>
            </div>
        </div>`;
    });
}).catch(error => {
    console.error('Error al cargar los datos:', error);
});
