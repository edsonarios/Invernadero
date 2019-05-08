import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import Servicios
import { ControladorService } from '../../../../service/controladores.service';
import { DispositivoService } from '../../../../service/dispositivos.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-componentes-agregar-controlador',
  styleUrls: ['./componentes_agregar_controlador.component.scss'],
  templateUrl: './componentes_agregar_controlador.component.html',
   providers:[ControladorService,DispositivoService],
  animations: [fundido]
})
export class ComponentesAgregarControladorComponent {
public Controller;
	
constructor(private ControlService: ControladorService,
    private dispositiveService: DispositivoService,
		private router:Router){	

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
volver(){

   this.router.navigate(['/Administrador/Invernaderos/Detalle']);
}
addControlador(ModeloC,MarcaC,NroDig,NroAn){

this.ControlService.AgregaControlador(localStorage.getItem('admin_user_id'),localStorage.getItem('admin_user_inv_id'),MarcaC,ModeloC,NroDig,NroAn).subscribe(
      response =>{
        console.log(response);
   
      },
      error =>{
        
      }
    );
   
		this.router.navigate(['/Administrador/Invernaderos/Detalle']);
}

}
