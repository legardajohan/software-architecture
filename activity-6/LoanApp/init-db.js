// Seleccionar o crear la base de datos
use loanapp;

// Crear la colección Usuarios
db.createCollection("users");

// Crear la colección Artículos
db.createCollection("articles");

// Crear la colección Préstamos
db.createCollection("loans");

// Insertar datos en la coleccion de user
db.users.insertMany([
    {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      phone: "555-1234",
      avatar_url: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "María Gómez",
      email: "maria.gomez@example.com",
      phone: "555-5678",
      avatar_url: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@example.com",
      phone: "555-8765",
      avatar_url: "https://randomuser.me/api/portraits/men/3.jpg"
    }
]);

// Insertar datos en la coleccion articles
db.articles.insertMany([
    {
      name: "Laptop Dell",
      category: "Informática",
      description: "Laptop Dell con 16GB de RAM y SSD de 512GB",
      image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_753299-MCO78739487578_092024-F.webp"
    },
    {
      name: "Proyector Epson",
      category: "Informática",
      description: "Proyector Full HD",
      image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_661950-MLU74087913764_012024-F.webp"
    },
    {
      name: "Pelota de Fútbol",
      category: "Deportes",
      description: "Pelota oficial de fútbol tamaño 5",
      image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_982222-MLU74128463767_012024-F.webp"
    }
]);

// Insertar datos en la coleccion de loans
db.loans.insertMany([
    {
      user_id: 1,
      article_id: 1,
      loan_date: new Date("2024-10-01"),
      return_date: null, // Aún no devuelto
      state: "pendiente"
    },
    {
      user_id: 2,
      article_id: 2,
      loan_date: new Date("2024-09-28"),
      return_date: new Date("2024-10-05"),
      state: "devuelto"
    },
    {
      user_id: 3,
      article_id: 3,
      loan_date: new Date("2024-10-03"),
      return_date: null, // Aún no devuelto
      state: "pendiente"
    }
]);
  