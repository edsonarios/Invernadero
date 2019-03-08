import { Component , DoCheck, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-main',
  template: `
    <ngx-one-column-layout>
      <router-outlet> 
      </router-outlet>
    </ngx-one-column-layout>
  `,

})
export class MainComponent implements OnInit,DoCheck{

constructor(
		private router:Router

		){}
ngOnInit(){
	console.log(' Se ha cargado la pagina de Inicio');
}
ngDoCheck(){
	
	
	if (localStorage.getItem('status')!=null) {
		if(localStorage.getItem('role')=='user'){
			//console.log('Usted esta logeado como Usuario');
			this.router.navigate(['/pages/producto']);
		}
		if (localStorage.getItem('role')=='admin') {
			//console.log('Usted esta logeado como Administrador');
			this.router.navigate(['/admin/user']);
		}
		if (localStorage.getItem('role')=='root') {
			//console.log('Usted esta logeado como Administrador');
			this.router.navigate(['/admin/user']);
		}

		
	} 


}

}
