import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios

import { DispositivoService } from '../../../../service/dispositivos.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-controladores-catalogo',
  styleUrls: ['./controladores_catalogo.component.scss'],
  templateUrl: './controladores_catalogo.component.html',
 providers:[DispositivoService],
	 animations: [fundido]
})
export class ControladoresCatalogoComponent {
public Controller;
	
constructor(private router:Router,
	private dispositiveService: DispositivoService){
	this.dispositiveService.ObtenerDispositivos().subscribe(
			response =>{
				this.Controller=response;
				console.log(this.Controller);
			},
			error =>{
				console.log(<any>error)
			}
			);	
}
agregar(){
  this.router.navigate(['/Administrador/Controladores/Agregar']);
}
Eliminar(id){
	this.dispositiveService.eliminar(id).subscribe(
			response =>{
				this.Controller=response;
				console.log(this.Controller);
			},
			error =>{
				console.log(<any>error)
			}
			);
	this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/Administrador/Controladores/Catalogo']));

}
}
