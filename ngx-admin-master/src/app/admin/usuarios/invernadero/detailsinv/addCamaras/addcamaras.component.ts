import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-add-camara',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './addcamaras.component.html',
  animations: [fundido]
})
export class AddCamaraComponent {
	
constructor(
		private router:Router){

}

volver(){
this.router.navigate(['/admin/camaras']);
}
}
