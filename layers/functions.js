const { addUserData } = require('./data');

function createUser(name, email) {
    if (!name || !email) {
        console.log('Nombre y correo electrónico son obligatorios.');
        return;
    }
    const user = { name, email };
    addUserData(user);
    console.log('Usuario creado exitosamente.');
}

module.exports = { createUser };