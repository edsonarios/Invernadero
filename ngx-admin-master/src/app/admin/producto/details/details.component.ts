import { Component} from '@angular/core';

//importar servicio, 
import { User } from '../../../model/user';
import { GLOBAL } from '../../../service/global';
import { fundido } from '../../../animation';

@Component({
  selector: 'ngx-admin-details-product',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './details.component.html',
 animations: [fundido]

})
export class DetailsProductoComponent {
	

	constructor(){
		
		
	}
	
	
}