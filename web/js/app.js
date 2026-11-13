const btnClic = document.getElementById('btnClic');
const contadorElemento = document.getElementById('contador');
const tablaRegistros = document.getElementById('tablaRegistros');

let conteo = 0;

btnClic.addEventListener('click', () => {
    conteo++;
    contadorElemento.textContent = conteo;

    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
    <td>${conteo}</td>
    <td>${horaFormateada}</td>
`;

    tablaRegistros.prepend(nuevaFila);
});
