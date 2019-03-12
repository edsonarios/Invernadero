import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-quienes_somos',
  styleUrls: ['./quienes_somos.component.scss'],
  templateUrl: './quienes_somos.component.html',
 
})
export class QuienesSomosComponent implements AfterViewInit{

constructor(
		private router:Router,

		){
}

	
ngAfterViewInit(){
	window.scrollTo(0, 0);
}

	
}
