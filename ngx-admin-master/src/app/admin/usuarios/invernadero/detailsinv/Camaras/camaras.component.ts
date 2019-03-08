import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-camaras',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './camaras.component.html',
  animations: [fundido]
})
export class CamaraComponent {
	Camara=new Array(3);
constructor(
		private router:Router){

	}

volver(){

   this.router.navigate(['/admin/detailsinv']);
}
add(){
	this.router.navigate(['/admin/addcamara']);
}
}
