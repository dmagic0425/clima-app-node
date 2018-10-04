const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInformacion = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temperatura }`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
};

getInformacion(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(26.1368887, -80.11974029999999)
//     .then(temp => console.log(temp))
//     .catch(err => console.log(err));