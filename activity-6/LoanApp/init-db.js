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
    password: "$2a$10$cVg0xE1TC.yApiQJMK9X2OcophaTkmR/dKwDUR99qAaSJQC1.31lK",
    phone: "555-1234",
    avatar_url: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "María Gómez",
    email: "maria.gomez@example.com",
    password: "$2a$10$g6p24yrwD1x3/zYSyAahQuP5mt/REF5soQ3I/4iWDsdiP6ZnYcjx2",
    phone: "555-5678",
    avatar_url: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
    password: "$2a$10$ZaJMy0VcJxS.K8Hg0Di2Sum67qiQBTm4AmqsByszaGsVQeRQUZjgO",
    phone: "555-8765",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg"
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
    user_id: "6705d16c104405ee61e8a295",
    article_id: "6705d188104405ee61e8a298",
    loan_date: {
      $date: "2024-10-01T00:00:00.000Z"
    },
    return_date: null,
    state: "Pendiente"
  },
  {
    user_id: "6705d16c104405ee61e8a296",
    article_id: "6705d188104405ee61e8a299",
    loan_date: {
      $date: "2024-09-28T00:00:00.000Z"
    },
    return_date: {
      $date: "2024-10-05T00:00:00.000Z"
    },
    state: "Devuelto"
  },
  {
    user_id: "6705d16c104405ee61e8a297",
    article_id: "6705d188104405ee61e8a29a",
    loan_date: {
      $date: "2024-10-03T00:00:00.000Z"
    },
    return_date: null,
    state: "Pendiente"
  }
]);
  