import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar servicios 
import { DispositivoService } from '../../../../service/dispositivos.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-controladores-agregar',
  styleUrls: ['./controladores_agregar.component.scss'],
  templateUrl: './controladores_agregar.component.html',
  providers:[DispositivoService],
  animations: [fundido]
 
})
export class ControladoresAgregarComponent {

	
constructor(private router:Router,
	private dispositiveService: DispositivoService){	
}
volver(){
		this.router.navigate(['/Administrador/Controladores/Catalogo'])
	}
	addControlador(e){
		e.preventDefault();
		var modelo=e.target.elements[0].value;
		var marca=e.target.elements[1].value;
		var nroPD=e.target.elements[2].value;
		var nroPA=e.target.elements[3].value;
		console.log(modelo);
		console.log(marca);
		console.log(nroPD);
		console.log(nroPA);


		this.dispositiveService.crearDispositivo(modelo,marca,nroPD,nroPA).subscribe(
			response =>{
				console.log(response);
			},
			error =>{
				console.log(<any>error)
			}
			);
		this.router.navigate(['/Administrador/Controladores/Catalogo'])
	}

}
