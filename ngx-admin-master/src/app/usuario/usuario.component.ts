import { Component ,OnInit} from '@angular/core';

import { MENU_ITEMS } from './usuario-menu';

import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'ngx-usuario',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet *ngIf="exist=='true'"> 
      <!--
       <div class="col-md-6 offset-md-3" *ngIf="hidden=='true'">
       <span align="center"><h6>Seleccione su Invernadero</h6></span>
       <nb-card>
        <nb-card-body>
       <div class="btn-group">
       <div class="" *ngFor="let n of Invenaderos; let i=index">
       
        <button class="btn btn-outline-success " (click)="GuardaID(Invenaderos[i]['id'])" *ngIf="Invenaderos[i]['id']!=dato">
        {{i+1}}
        </button>
        <button class="btn btn-success " (click)="GuardaID(Invenaderos[i]['id'])" *ngIf="Invenaderos[i]['id']==dato">
        {{i+1}}
        </button>

       
        </div>
       </div>
       </nb-card-body>
       </nb-card>
       </div>-->
      </router-outlet>
    </ngx-one-column-layout>
  `,
    providers: [UserService]
})
export class UsuarioComponent implements OnInit{
  hidden='true';
  exist='true';
  Invenaderos;
  public user: User;
  menu = MENU_ITEMS;
  dato;

  constructor(
  private router:Router,
  private userService: UserService
  
 
    ){
    
    /*if (localStorage.getItem('status')==null) {
      this.router.navigate(['/Principal/Inicio']); 
      window.alert('usted no tiene acceso');
    }else{
      this.dato=localStorage.getItem('user_inv_id');
    }*/

  }

  ngOnInit(){
    
    //--ADMINISTRADOR--
    if (localStorage.getItem('role')=='admin'||localStorage.getItem('role')=='root') {
     this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','','','','','');
     this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invenaderos= response;
        //console.log(this.Invenaderos);
        //comprueba si existe un invernadero instanciado de forma local y si no este mismo lo asigna
         if (localStorage.getItem('user_inv_id')== null && this.Invenaderos.length>=1) {
           localStorage.setItem('user_inv_id',this.Invenaderos[0]['id']);
            this.dato=localStorage.getItem('user_inv_id');
          }
        if(this.Invenaderos.length>1){
          this.hidden='true';
        }
        else{
          if(this.Invenaderos.length==0)
          {
            this.exist='false';
          }
          else{
            this.hidden='false';
            this.exist='true';
          }
        }
       //console.log(this.exist);
         },
      error =>{
        console.log(<any>error);
      }
    )
    }

    //--USUARIO--
    else{
       this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','','');
   		this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invenaderos= response;
        //console.log(this.Invenaderos);
        //comprueba si existe un invernadero instanciado de forma local y si no este mismo lo asigna
        if (localStorage.getItem('user_inv_id')== null && this.Invenaderos.length>=1) {
            localStorage.setItem('user_inv_id',this.Invenaderos[0]['id']);
            this.dato=localStorage.getItem('user_inv_id');

          }
          
          
        if(this.Invenaderos.length>1){
          this.hidden='true'; 
        }
        else{
          if(this.Invenaderos.length==0){
            this.exist='false';
          }
          else{

              this.hidden='false';
              this.exist='true';

          }
        }
      
         },
      error =>{
       // console.log(<any>error);
      }
    );
    }
  }

  
}
