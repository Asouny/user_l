import { Component, OnInit } from '@angular/core';
import {User} from  '../../models/users';
import {Router, ActivatedRoute } from "@angular/router"
import {UserServicesService} from '../../services/user-services.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any;
  constructor(private router:Router,private service:UserServicesService,private actrouter: ActivatedRoute) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.user = JSON.parse(params.special);
      }//params
    );//actrouter
  }
  ngOnInit() {
  }

}

