import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
import { Observable } from 'rxjs/Rx';
//declare function thermometer(): any;

@Component({
  selector: 'ngx-usuario-Monitoreo',
  styleUrls: ['./monitoreo.component.scss'],
  templateUrl: './monitoreo.component.html',
 animations: [fundido]
})
export class MonitoreoComponent {
ValTemp1=0;
ValTemp2=0;

ventanas=new Array(4);
puertas=new Array(2);
bombas=new Array(4);
Ventiladores=new Array(4);
  
constructor(
		private router:Router,
		){

 this.NumAleatoreo();
	
}
  NumAleatoreo(){
    var numbers = Observable.timer(5000); // Call after 10 second.. Please set your time
    numbers.subscribe(x =>{
      //alert("10 second");
    this.ValTemp1= Math.round(Math.random() * (35 - 20) + 20);
     this.ValTemp2= Math.round(Math.random() * (35 - 20) + 20);
   this.NumAleatoreo();
    });
  }
		
}
