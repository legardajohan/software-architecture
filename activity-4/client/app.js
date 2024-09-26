// Función para obtener y mostrar la lista de usuarios desde el microservicio
function fetchUsers() {
    fetch('/users')
        .then(response => response.json()) // Parsear la respuesta JSON
        .then(users => {
            const userList = document.getElementById('userList');
            // Limpiar la lista antes de agregar nuevos elementos
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Función para obtener y mostrar la lista de productos desde el microservicio
function fetchProducts() {
    fetch('/products')
        .then(response => response.json()) // Parsear la respuesta JSON
        .then(products => {
            const productList = document.getElementById('productList');
            // Limpiar la lista antes de agregar nuevos elementos
            productList.innerHTML = '';
            products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `Product: ${product.name}, Price: $${product.price}`;
                productList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Llamar a las funciones cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    fetchProducts();
});
