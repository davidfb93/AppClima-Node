require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                //Buscar lugares
                const lugares = await busquedas.ciudad(termino);

                //Seleccionar el lugar
                const idSeleccionado = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === idSeleccionado);

                //TODO Datos clima
                //TODO Mostrar resultados
                console.log('\Información de la ciudad\n'.cyan.underline.bold);
                console.log('ciudad:', lugarSel.nombre);
                console.log('lat:', lugarSel.lat);
                console.log('lng:', lugarSel.lng);
                console.log('temperatura:',);
                console.log('mínima:',);
                console.log('máxima:',);

            break;

        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 );
}

main();