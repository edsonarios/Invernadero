import { Component , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-contactos',
  styleUrls: ['./contactos.component.scss'],
  templateUrl: './contactos.component.html',
 
})
export class ContactosComponent implements AfterViewInit{

	
constructor(
		private router:Router,

		){

	
}

	ngAfterViewInit(){
	window.scrollTo(0, 0);
}
		

	
}
