import { Component, OnInit } from '@angular/core';

import { User } from '../../models/users';
import { UserServicesService } from '../../services/user-services.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(
    private service: UserServicesService,
    private fb: FormBuilder,
    private alert: AlertController) { }

  ngOnInit() {
    this.initializeForm();
  }


  saveUser() {

    this.submitted = true;

    if (this.myForm.valid) {
      this.service.newUser({
        name: {
          firstName: this.myForm.get('firstName').value,
          lastName: this.myForm.get('lastName').value,
          fullName: this.myForm.get('firstName').value + this.myForm.get('lastName').value,
        },
        email: this.myForm.get('email').value,
        photo: this.myForm.get('photo').value,
        password: this.myForm.get('password').value,
        birthday: this.myForm.get('birthday').value,
        gender: this.myForm.get('gender').value,
        rfc: this.myForm.get('rfc').value,
        interests: [{
          interest: 'Desarrollo WEB'
        }],
        gallery: [
          {
            
            photo: 'https://drive.google.com/file/d/1xOO1ITTqG4VYEDB3ksqDdKeVq5A5pARy/view?usp=sharing',
            description: 'Foto de perfil propia'
          }
        ],
        active: true
      });
    }
    this.showAlert();
    console.log(this.service.getUsers());
  }

  async showAlert() {
    const al = await this.alert.create({
      header: 'Usuario Registrado',
      message: 'Usuario registrado exitosamente',
      buttons: [{
        text: 'Cerrar',
        handler: () => {}
      }]
    });
    await al.present();
  }

  initializeForm(): void {
    this.myForm = this.fb.group(
      {
        firstName: ['',Validators.compose([Validators.required, Validators.minLength(4)])],

        lastName:['',Validators.compose([Validators.required, Validators.minLength(4)])],

        email: ['',Validators.compose([Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')])],

        photo: ['',Validators.compose([Validators.required])],
              
        password: ["",Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(16)])],

        birthday: ['',Validators.compose([Validators.required])],

        gender: ['',Validators.compose([Validators.required])],

        rfc: ['', Validators.compose([Validators.required, 
            Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')])],

      });
  }
}
