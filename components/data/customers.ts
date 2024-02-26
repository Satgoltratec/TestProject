export interface Customer {
    id: number;
    name: string;
    dni: string;
    address: string;
    postcode:number;
    locality:string;
    province: string;
    country: string;
    telephone1: number;
    telephone2?: number;
}

export const customers: Customer[] = [
    {
        id: 1,
        name: "Boutique Fashion XYZ",
        dni: "12345678A",
        address: "Calle Principal, 123",
        postcode: 28001,
        locality: "Madrid",
        province: "Madrid",
        country: "España",
        telephone1: 611223344,
        telephone2: 622334455
      },
      {
        id: 2,
        name: "Tech Innovations Inc.",
        dni: "23456789B",
        address: "Avenida Central, 456",
        postcode: 18001,
        locality: "Barcelona",
        province: "Barcelona",
        country: "España",
        telephone1: 633445566
      },
      {
        id: 3,
        name: "TaskMaster Ltd.",
        dni: "34567890C",
        address: "Calle Secundaria, 789",
        postcode: 41001,
        locality: "Sevilla",
        province: "Sevilla",
        country: "España",
        telephone1: 655667788,
        telephone2: 677889900
      },
      {
        id: 4,
        name: "Education Online Inc.",
        dni: "45678901D",
        address: "Plaza Universitaria, 1011",
        postcode: 48001,
        locality: "Bilbao",
        province: "Vizcaya",
        country: "España",
        telephone1: 688990011
      },
      {
        id: 5,
        name: "Travel Adventures Ltd.",
        dni: "56789012E",
        address: "Avenida de la Aventura, 1314",
        postcode: 15001,
        locality: "La Coruña",
        province: "La Coruña",
        country: "España",
        telephone1: 699001122,
        telephone2: 711122233
      },
      {
        id: 6,
        name: "Hotel Bookings Online",
        dni: "67890123F",
        address: "Calle Reservas, 1516",
        postcode: 28002,
        locality: "Madrid",
        province: "Madrid",
        country: "España",
        telephone1: 722233344
      },
      {
        id: 7,
        name: "Freelance Network Ltd.",
        dni: "78901234G",
        address: "Avenida de los Freelancers, 1718",
        postcode: 18002,
        locality: "Barcelona",
        province: "Barcelona",
        country: "España",
        telephone1: 733344455,
        telephone2: 744455566
      },
      {
        id: 8,
        name: "Decor Home Store",
        dni: "89012345H",
        address: "Calle Decoración, 1920",
        postcode: 41002,
        locality: "Sevilla",
        province: "Sevilla",
        country: "España",
        telephone1: 755566677
      },
      {
        id: 9,
        name: "Music Connect",
        dni: "90123456I",
        address: "Plaza de la Música, 2122",
        postcode: 48002,
        locality: "Bilbao",
        province: "Vizcaya",
        country: "España",
        telephone1: 766677788,
        telephone2: 777788899
      },
      {
        id: 10,
        name: "TutorMe Online",
        dni: "01234567J",
        address: "Avenida de las Tutorías, 2324",
        postcode: 15002,
        locality: "La Coruña",
        province: "La Coruña",
        country: "España",
        telephone1: 788899900
      },
      {
        id: 11,
        name: "Restaurante Gustoso",
        dni: "12345678K",
        address: "Calle de los Sabores, 2526",
        postcode: 28003,
        locality: "Madrid",
        province: "Madrid",
        country: "España",
        telephone1: 799001122,
        telephone2: 711223344
      }

];
  