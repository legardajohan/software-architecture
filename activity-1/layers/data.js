let userData = [
    { name: 'Jhon', email: 'jhon@gmail.com' },
    { name: 'Maria', email: 'maria@outlook.com'}
];



function addUserData(user) {
    userData.push(user);
}

function getUserData() {
    return userData;
}

module.exports = { addUserData, getUserData };