import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  
  private users: User[] = new Array();

  constructor() {

    this.users.push({
      name: {
        firstName: 'Marco', //Nombre(s)
        lastName: 'Ramirez', //Apellidos 
        fullName: 'Marco Antonio Ramirez' // Nombre completo (Nombres + Apellidos)
    },
    email: 'maanramirezsa@ittepic.edu.mx',
    photo: 'https://pbs.twimg.com/profile_images/1202123558807162880/KRXcSJFe_400x400.jpg', // URL de foto del usuario
    password: 'miau2608',
    birthday: '16/08/1992', //Fecha de nacimiento
    gender: 'Masculino',  //Género
    rfc: 'RASM980816HMNTR07', //Registro Federal de Contribuyente (RFC)
    interests: [{  //arreglo con intereses
        interest: 'Desarrollo WEB'  //Interes (Ejemplo: 'Desarrollo Web')
    }],
    gallery: [
        {
            photo: 'https://drive.google.com/file/d/1xOO1ITTqG4VYEDB3ksqDdKeVq5A5pARy/view?usp=sharing', //URL de la fotografía
            description: "Foto de perfil propia"  // Descripción de la fotografía
        }
    ],
    active: true
    });

  }

  changeStatus(position: number) {
    this.users[position].active = !this.users[position].active;
  }

  getUsers(): User[] {
    return this.users;
  }

  newUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(position: number): void {
    this.users.splice(position, 1);
  }
}

