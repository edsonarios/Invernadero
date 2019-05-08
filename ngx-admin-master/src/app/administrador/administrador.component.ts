import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './administrador-menu';

@Component({
  selector: 'ngx-adinistrador',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AdministradorComponent{

  menu = MENU_ITEMS;
  constructor(private router:Router){
  /*	if (localStorage.getItem('status')==null) {
  		this.router.navigate(['/Principal/Inicio']); 
  		window.alert('usted no tiene acceso');
  	}*/
  }


}
