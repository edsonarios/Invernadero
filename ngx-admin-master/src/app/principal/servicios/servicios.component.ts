import { Component , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-servicios',
  styleUrls: ['./servicios.component.scss'],
  templateUrl: './servicios.component.html',
 
})
export class ServiciosComponent implements AfterViewInit{

	
constructor(
		private router:Router,

		){

	
}

ngAfterViewInit(){
	window.scrollTo(0, 0);
}	
		

	
}
