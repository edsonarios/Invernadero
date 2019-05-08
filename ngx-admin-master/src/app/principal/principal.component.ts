import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-principal',
  template: `
    <ngx-sample-layout>
      <router-outlet> 
      </router-outlet>
    </ngx-sample-layout>
  `,

})
export class PrincipalComponent implements OnInit{

constructor(
		private router:Router

		){}
ngOnInit(){
  localStorage.clear();
}



}
