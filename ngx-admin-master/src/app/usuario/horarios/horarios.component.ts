import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
import { Router } from '@angular/router';
import { fundido } from '../../animation';
import { HorarioService } from '../../../service/horario.service';
import { ControladorService } from '../../../service/controladores.service';
@Component({
  selector: 'ngx-Tester-horarios',
  styleUrls: ['./horarios.component.scss'],
  templateUrl: './horarios.component.html',
    providers:[HorarioService,ControladorService],
 animations: [fundido]
})
export class HorariosComponent {
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
        console.log(this.horario);
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

        console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
}
eliminarHorario(id,uuid){

  this.horaService.eliminarHorario(id).subscribe(
      response =>{
        this.horario=response;
      },
      error =>{
        
      }
    );

   var a = `{"agent":{"uuid":"${uuid}"},"id":"${id}"}`
    console.log(a);
    this.socket.emit('eliminarRiego', a)
    

    this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/Usuario/Horarios']));
      
}
addHour(elem,id,uuid){
  var time_Hora=parseInt(elem.target.elements[0].value);
  var time_Minuto =parseInt(elem.target.elements[1].value);
  var time_duracion=parseInt(elem.target.elements[2].value);
  var Hora;
  var Minuto;
  var duracion

  if(time_Hora<10)
    {
      Hora='0'+time_Hora;
    }
   else{
     Hora=time_Hora;
   }
    if(time_Minuto<10)
    {
      Minuto='0'+time_Minuto;
    }
     else{
     Minuto=time_Minuto;
   }
    if(time_duracion<10)
    {
      duracion='0'+time_duracion;
    }
     else{
     duracion=time_duracion;
   }
    console.log("tiempo---> "+Hora+':'+Minuto+':00');
    console.log("Duracion---> "+'00:'+duracion+':00');


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
     this.router.navigate(['/Usuario/Horarios']));
    
}
			
}