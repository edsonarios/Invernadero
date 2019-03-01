import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../service/global';
import { Router } from '@angular/router';
import { fundido } from '../../../animation';
import { HorarioService } from '../../../../service/horario.service';
import { ControladorService } from '../../../../service/controladores.service';

@Component({
  selector: 'ngx-usuario-control-manual-horarios',
  styleUrls: ['./control_manual_horarios.component.scss'],
  templateUrl: './control_manual_horarios.component.html',
   providers:[HorarioService,ControladorService],
  animations: [fundido]
})
export class ControlManualHorariosComponent {
public	horario;
  public bombas;
  public Controller;
  public socket;
  public urlSocket:string;
	
constructor(private horaService:HorarioService,
		private router:Router,
    private ControlService:ControladorService ){
	localStorage.setItem('route','horarios');
     this.urlSocket=GLOBAL.urlSocket;
     // console.log("ESTE ES EL DATO ");
     this.socket = io(this.urlSocket);
     //console.log(this.socket);

     //obtiene los horarios por bomba
		this.horaService.mostrarHorarios(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
      	this.horario=response;
        //console.log(this.horario);
      },
      error =>{
        
      }
    );
    
//obtiene los datos de las bombas actuales
    this.horaService.obtenerBombas(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.bombas=response;
       //console.log(this.bombas);
      },
      error =>{
        
      }
    );
//obtiene los datos de los controladores
    this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.Controller=response;

        //console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
}
eliminarHorario(id){

  this.horaService.eliminarHorario(id).subscribe(
      response =>{
        this.horario=response;
        console.log(response);
      },
      error =>{
        
      }
    );

    this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/Usuario/Control/Horarios']));
      
}
addHour(elem,id,uuid){
  var Hora=elem.target.elements[0].value;
  var Minuto =elem.target.elements[1].value;
  var duracion=elem.target.elements[2].value;

  if(Hora<10)
    {
      Hora='0'+Hora;
    }
    if(Minuto<10)
    {
      Minuto='0'+Minuto;
    }
    if(duracion<10)
    {
      duracion='0'+duracion;
    }


    var a = `{"agent":{"uuid":"${uuid}"},"hora":"${Hora}:${Minuto}:00","duracion":"00:${duracion}:00","bomba":"${id}"}`
    console.log(a);
    this.socket.emit('nuevoRiego', a)
    

  //this.inv.tiempoIntermitencia='00:'+min+':'+sec;

  this.horaService.adicionarNuevaHora(id,Hora+':'+Minuto+':00','00:'+duracion+':00').subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        
      }
    );
    this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/Usuario/Control/Horarios']));
}
	
}