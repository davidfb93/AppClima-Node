require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
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
                if ( idSeleccionado === '0') continue;

                const lugarSel = lugares.find( l => l.id === idSeleccionado);

                // Guardar en DB
                busquedas.agregarHistorial( lugarSel.nombre );

                //Datos clima
                const clima = await busquedas.climalugar( lugarSel.lat, lugarSel.lng );
                
                //Mostrar resultados
                console.clear();
                console.log();
                console.log('\Información de la ciudad\n'.green.underline.bold.bgBlue);
                console.log('ciudad:', lugarSel.nombre.green);
                console.log('lat:', lugarSel.lat);
                console.log('lng:', lugarSel.lng);
                console.log('temperatura:', clima.temp);
                console.log('mínima:', clima.min);
                console.log('máxima:', clima.max);
                console.log('Cómo está el clima:', clima.desc.cyan);
            break;
            case 2:
            busquedas.HistorialCapitalizado.forEach( (lugar, i) => {
                const idx = `${i + 1}.`.green;
                console.log(`${idx} ${lugar}`);
            });
            break;

        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 );
}

main();