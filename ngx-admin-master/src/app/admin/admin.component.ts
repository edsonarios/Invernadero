import { Component , DoCheck} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-Admin',
  template: `

    <ngx-one-column-layout>
      <router-outlet> 
      </router-outlet>
    </ngx-one-column-layout>
  


  `,

})
export class AdminComponent implements DoCheck{

constructor(
		private router:Router

		){}

	ngDoCheck(){

		if (localStorage.getItem('status')==null||localStorage.getItem('role')=='user') {
			//console.log('Entro por la URL al Administrador');
			this.router.navigate(['/main/login']);
		}
		
		
	} 
}
