const fs = require('fs');

function importar(marca) {
    const rutaArchivo = `./datos/figuras${marca}.json`;
    const contenido = fs.readFileSync(rutaArchivo, 'utf8');
    return JSON.parse(contenido);
}

module.exports = importar;