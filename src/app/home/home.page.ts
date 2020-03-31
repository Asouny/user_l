import { Component } from '@angular/core';

import { UserCredentials } from '../models/user-credentials';

import { User } from '../models/users';
import { UserServicesService } from '../services/user-services.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[] = [];
  Credentials = {} as UserCredentials;
  myForm: FormGroup;
  submitted = false;


  constructor(
    private userService: UserServicesService,
    private router: Router,
    private alert: AlertController,
    private form: FormBuilder
  ) {
    this.clearSearch();
    this.formValidations();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private clearSearch(): void {
    this.users = this.userService.getUsers();
  }

  newUser(): void {
    this.router.navigate(['/registrar']);
  }

  ssfulLogin():void{
    this.router.navigate(['/perfil']);
  }
  
  formValidations(){
    this.myForm = this.form.group({
      email:['',Validators.compose([
                Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')])],
      password:['', Validators.compose([
                  Validators.minLength(8),
                  Validators.maxLength(16),
                  Validators.pattern('[a-zA-Z0-9]+')])]
    })
  }

  validateUser(){ 
    this.submitted = true;
    if(this.myForm.valid){
      this.users = this.userService.getUsers();
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].email===this.myForm.get('email').value){
          if(this.users[i].password===this.myForm.get('password').value){
            const extras:NavigationExtras = {
              queryParams: {
                special: JSON.stringify(this.users[i])  
              }
            };
            this.router.navigate(['/perfil'], extras); 
            break;
          }
          this.wrongPass();
          }
      }
    }
  }
  
  async wrongPass() {
    const alert = await this.alert.create({
      header: 'Incorrecto',
      message: 'Datos Incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
