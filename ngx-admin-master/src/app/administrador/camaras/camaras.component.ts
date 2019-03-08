import { Component 
} from '@angular/core';
import { Router } from '@angular/router';
import { fundido } from '../../animation';
@Component({
  selector: 'ngx-camaras',
  styleUrls: ['./camaras.component.scss'],
  templateUrl: './camaras.component.html',
 animations: [fundido]
})
export class CamarasComponent {
Camara=new Array(3);
	
constructor(
		private router:Router,

		){

	
}
volver(){

   this.router.navigate(['/Administrador/Invernaderos/Detalle']);
}
AddAnalogico($event){
	
}

	

	
}
