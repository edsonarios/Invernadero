import { Component,OnInit,DoCheck } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
//import { Location } from '@angular/common';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu" > </nb-menu>
      <router-outlet *ngIf="exist=='true'"> 
      
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
       </div>
      </router-outlet>
    </ngx-sample-layout>
  `,
  providers: [UserService]

})
export class PagesComponent implements OnInit,DoCheck{
  hidden='true';
  exist='true';
  Invenaderos;
  public user: User;
  menu = MENU_ITEMS;
  dato;


  constructor(
  private router:Router,
  //private location: Location,
  private userService: UserService
  
 
    ){
    this.dato=localStorage.getItem('user_inv_id')
  }

  ngOnInit(){
    
    //--ADMINISTRADOR--
    if (localStorage.getItem('role')=='admin'||localStorage.getItem('role')=='root') {
     this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','','','','');
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
       this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
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
       //console.log(this.exist);
         },
      error =>{
        console.log(<any>error);
      }
    );
    }

  }
  GuardaID(id){
   localStorage.setItem('user_inv_id',id);

   switch (localStorage.getItem('route')) {
     case "producto":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/producto']));
       break;
     case "reporte":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/reporte']));
       break;
       case "Msensores":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/monitoreo/sensores']));
       break;
       case "Mactuadores":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/monitoreo/actuadores']));
       break;
       case "Mcamaras":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/monitoreo/camaras']));
       break;
       case "Cactuadores":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/control/actuadores']));
       break;
       case "horarios":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/control/horarios']));
       break;
       case "info":
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/info']));
       break;
     default:
       this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/producto']));
       break;
   }

   
   
   //location.reload();
     
   
  }
  ngDoCheck(){

   if (localStorage.getItem('status')==null) {
     // console.log('Entro por la URL al Usuario'); 
      this.router.navigate(['/main/login']);
    }
    
    }
}
