import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';

import { fundido } from '../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-add',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './addinv.component.html',
  providers: [InvernaderoService],
    animations: [fundido]
})
export class AddInvComponent {
	public inv: Invernadero;
	



	constructor(private router:Router,
		private invService: InvernaderoService){
		this.inv = new Invernadero('','','','','0','0','0','',localStorage.getItem('admin_user_id'),'0','0');
		
		
	}
	addinv(elem){

		//TIEMPO DE iNTERMITENCIA
		var min=elem.target.elements[3].value;
		var sec =elem.target.elements[4].value;
		if(min<10)
		{
			min='0'+min;
		}
		if(sec<10)
		{ 
			sec='0'+sec;
		}
		this.inv.tiempoIntermitencia='00:'+min+':'+sec;
		//TIEMPO DE PAUSA
		var min2=elem.target.elements[5].value;
		var sec2 =elem.target.elements[6].value;
		if(min2<10)
		{
			min2='0'+min2;
		}
		if(sec2<10)
		{
			sec2='0'+sec2;
		}

		this.inv.tiempoPausa='00:'+min2+':'+sec2;
		//TIEMPO DE FUNCIONAMIENTO
		var min3=elem.target.elements[7].value;
		var sec3 =elem.target.elements[8].value;
		if(min3<10)
		{
			min3='0'+min3;
		}
		if(sec3<10)
		{
			sec3='0'+sec3;
		}
		this.inv.tiempoFuncionMotor='00:'+min3+':'+sec3;
		
		console.log(this.inv);
		
		this.invService.Añadir(this.inv).subscribe(
			response =>{
				console.log(response);
			},
			error =>{
				console.log(<any>error)
			}
		)
		this.router.navigateByUrl('/addinv', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/details']));
	


	}
	volver(){
		this.router.navigateByUrl('/desPin', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/details']));
}
}
