const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=55324f5fcea1a6858541d960c8354cb7`)

    if (resp.data.message === 'Nothing to geocode') {
        throw new Error(`No existen coordenadas para lat lng`);
    }

    let temperatura = resp.data.main.temp;

    return temperatura;
};

module.exports = {
    getClima
}