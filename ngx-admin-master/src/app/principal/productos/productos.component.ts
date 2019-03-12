import { Component , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-productos',
  styleUrls: ['./productos.component.scss'],
  templateUrl: './productos.component.html',
 
})
export class ProductosComponent implements AfterViewInit{

	
constructor(
		private router:Router,

		){

	
}
ngAfterViewInit(){
	window.scrollTo(0, 0);
}
	
		

	
}
