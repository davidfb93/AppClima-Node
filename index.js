require('dotenv').config()

const { leerInput, inquirerMenu, pausa} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);



                //TODO Buscar lugares
                //TODO Seleccionar el lugar
                //TODO Datos clima
                //TODO Mostrar resultados
                console.log('\Información de la ciudad\n'.cyan.underline.bold);
                console.log('ciudad:',);
                console.log('lat:',);
                console.log('lng:',);
                console.log('temperatura:',);
                console.log('mínima:',);
                console.log('máxima:',);

            break;

        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 );
}

main();