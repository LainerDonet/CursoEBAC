const seriesList = document.getElementById('series-list');
const serieDetail = document.getElementById('serie-detail');

// Cargar series populares (usamos búsqueda por palabra clave como ejemplo)
async function cargarSeries() {
    try {
        const res = await axios.get('https://api.tvmaze.com/shows?page=1');
        mostrarSeries(res.data.slice(0, 12)); // Muestra solo 12 series
    } catch (err) {
        seriesList.innerHTML = "<p>Error al cargar series.</p>";
    }
}

function mostrarSeries(series) {
    seriesList.innerHTML = '';
    series.forEach(serie => {
        const card = document.createElement('article');
        card.className = 'serie-card';
        card.innerHTML = `
            <img src="${serie.image ? serie.image.medium : ''}" alt="${serie.name}">
            <h2>${serie.name}</h2>
        `;
        card.onclick = () => cargarDetalleSerie(serie.id);
        seriesList.appendChild(card);
    });
}

// Endpoint 1: Detalle de serie
async function cargarDetalleSerie(id) {
    try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        const episodios = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
        mostrarDetalleSerie(res.data, episodios.data);
    } catch (err) {
        serieDetail.innerHTML = "<p>Error al cargar detalles.</p>";
        serieDetail.style.display = "block";
    }
}

function mostrarDetalleSerie(serie, episodios) {
    serieDetail.style.display = "block";
    serieDetail.innerHTML = `
        <button onclick="cerrarDetalle()" style="float:right;">Cerrar</button>
        <img src="${serie.image ? serie.image.medium : ''}" alt="${serie.name}">
        <h2>${serie.name}</h2>
        <p>${serie.summary || ''}</p>
        <h3>Episodios (${episodios.length})</h3>
        <ul>
            ${episodios.slice(0, 10).map(ep => `<li>${ep.season}x${ep.number} - ${ep.name}</li>`).join('')}
        </ul>
    `;
}

window.cerrarDetalle = function() {
    serieDetail.style.display = "none";
}

cargarSeries();