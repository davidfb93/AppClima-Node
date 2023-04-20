const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO Implementar leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token' : 'pk.eyJ1IjoiZGF2aWRmYjkzIiwiYSI6ImNsZ3BsYmMycjEwbTkzbGpxN2s2eTFlaTAifQ.xRwLF3bmtjHHQ90ydumjLw',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad ( lugar = ''){
        
        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            })

            const resp =  await instance.get();
            console.log(resp.data);



            return []; //Retornar los lugares
        } catch (error) {
            return [];
        }


        return []; //Retornar los lugares
    }
}



module.exports = Busquedas;