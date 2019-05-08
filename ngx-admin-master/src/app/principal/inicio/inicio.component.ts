import { Component , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-inicio',
  styleUrls: ['./inicio.component.scss'],
  templateUrl: './inicio.component.html',
 
})
export class InicioComponent implements AfterViewInit{

	
constructor(
		private router:Router,
		){

}

ngAfterViewInit(){
	window.scrollTo(0, 0);
}
		

	
}
