export class User {
    name: {
        firstName: string; //Nombre(s)
        lastName: string; //Apellidos 
        fullName: string; // Nombre completo (Nombres + Apellidos)
    };
    email: string;
    photo: string; // URL de foto del usuario
    password: string;
    birthday: string; //Fecha de nacimiento
    gender: string;  //Género
    rfc: string; //Registro Federal de Contribuyente (RFC)
    interests: [{  //arreglo con intereses
        interest: string;  //Interes (Ejemplo: 'Desarrollo Web')
    }];
    gallery: [
        {
            photo: string; //URL de la fotografía
            description: string;  // Descripción de la fotografía
        }
    ];
    active: boolean;
}