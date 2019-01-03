import { Component, AfterViewInit} from '@angular/core';

import { MENU_ITEMS } from './demo-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu" (click)="contenido($event)"></nb-menu>
      <router-outlet>
<a href="#/principal/Inicio"><input type="button" class="btn btn-success btn-block" value="Volver al inicio" ></a><br>
      <div class="col-md-6 offset-md-3">
       <span align="center"><h6>Seleccione su Invernadero</h6></span>
       <nb-card>
        <nb-card-body>
       <div class="btn-group">
       <div class="" *ngFor="let n of Invenaderos; let i=index">
       
        <button class="btn btn-outline-success btn-tn" >
        {{i+1}}
        </button>

        </div>
       </div>
       </nb-card-body>
       </nb-card>
       </div>


      </router-outlet>
    </ngx-one-column-layout>
  `,
})
export class DemoComponent implements AfterViewInit{
  public Invenaderos=new Array(6);

  constructor(){
    localStorage.setItem('page','producto');
  }

  menu = MENU_ITEMS;
  contenido(e){

  	if((<Element>e.target).innerHTML == 'producto'  ||
  		(<Element>e.target).innerHTML == 'Sensores' ||
  		(<Element>e.target).innerHTML == 'Actuadores' ||
  		(<Element>e.target).innerHTML == 'Energia' ||
  		(<Element>e.target).innerHTML == 'Camaras de Seguridad' ||
  		(<Element>e.target).innerHTML == 'CMActuadores' ||
  		(<Element>e.target).innerHTML == 'Horarios de Riego' ||
  		(<Element>e.target).innerHTML == 'Reporte' ||
  		(<Element>e.target).innerHTML == 'Info Invernadero'){
  		localStorage.setItem('page',(<Element>e.target).innerHTML);
      this.ngAfterViewInit();
  	}
  
  	
  }

  ngAfterViewInit(){
  window.scrollTo(0, 0);
}  
}

