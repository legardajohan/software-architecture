const readline = require('readline');
const { createUser } = require('./functions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('1. Ingresar Usuario');
    console.log('2. Mostrar Usuarios');
    console.log('3. Salir');
    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Ingrese el nombre: ', (name) => {
                    rl.question('Ingrese el correo electrónico: ', (email) => {
                        createUser(name, email);
                        showMenu();
                    });
                });
                break;
            case '2':
                console.log('Usuarios:');
                console.log(require('./data').getUserData());
                showMenu();
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                showMenu();
                break;
        }
    });
}

showMenu();