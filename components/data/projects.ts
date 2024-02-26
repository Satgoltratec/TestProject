export interface Project {
    id: number;
    name: string;
    description: string;
    customer: string;
    price:number;

  }
  

 export const projects: Project[] = [
    {
        id: 1,
        name: "Sitio Web de una Tienda de Ropa",
        description: "Desarrollo de un sitio web de comercio electrónico para una tienda de ropa que vende moda para hombres y mujeres.",
        customer: "Boutique Fashion XYZ",
        price: 10000
      },
      {
        id: 2,
        name: "Rediseño del Blog Corporativo",
        description: "Rediseño del blog corporativo de una empresa de tecnología para mejorar la experiencia del usuario y la accesibilidad.",
        customer: "Tech Innovations Inc.",
        price: 7500
      },
      {
        id: 3,
        name: "Aplicación Web de Gestión de Tareas",
        description: "Desarrollo de una aplicación web para gestionar y organizar tareas personales y profesionales.",
        customer: "TaskMaster Ltd.",
        price: 15000
      },{
        id: 4,
        name: "Plataforma de E-learning",
        description: "Desarrollo de una plataforma de e-learning para ofrecer cursos en línea a estudiantes de todo el mundo.",
        customer: "Education Online Inc.",
        price: 20000
      },
      {
        id: 5,
        name: "Blog de Viajes",
        description: "Creación de un blog de viajes para compartir experiencias, consejos y recomendaciones sobre destinos turísticos populares.",
        customer: "Travel Adventures Ltd.",
        price: 5000
      },
      {
        id: 6,
        name: "Sistema de Reservas de Hoteles",
        description: "Desarrollo de un sistema de reservas de hoteles en línea para facilitar la reserva de habitaciones de hotel de manera conveniente.",
        customer: "Hotel Bookings Online",
        price: 18000
      },
      {
        id: 7,
        name: "Plataforma de Freelancers",
        description: "Construcción de una plataforma en línea para conectar freelancers con clientes que necesitan servicios profesionales.",
        customer: "Freelance Network Ltd.",
        price: 22000
      },
      {
        id: 8,
        name: "Tienda de Artículos de Decoración",
        description: "Desarrollo de una tienda en línea para la venta de artículos de decoración para el hogar y regalos originales.",
        customer: "Decor Home Store",
        price: 12000
      },
      {
        id: 9,
        name: "Red Social para Músicos",
        description: "Creación de una red social especializada para músicos donde puedan compartir su música, conectar con otros artistas y promocionar sus obras.",
        customer: "Music Connect",
        price: 16000
      },
      {
        id: 10,
        name: "Plataforma de Tutorías en Línea",
        description: "Desarrollo de una plataforma en línea que conecta a estudiantes con tutores para brindar tutorías personalizadas en diversas materias.",
        customer: "TutorMe Online",
        price: 14000
      },
      {
        id: 11,
        name: "Sitio Web de Restaurante",
        description: "Diseño y desarrollo de un sitio web para un restaurante local, con menús, horarios y opción de reservas en línea.",
        customer: "Restaurante Gustoso",
        price: 8000
      },

  ];
  
