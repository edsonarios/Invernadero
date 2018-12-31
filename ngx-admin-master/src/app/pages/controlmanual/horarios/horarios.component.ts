import { Component,OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
import { Router } from '@angular/router';
import { fundido } from '../../../animation';
import { HorarioService } from '../../../service/horario.service';
import { ControladorService } from '../../../service/controladores.service';
@Component({
  selector: 'ngx-horarios',
  templateUrl: './horarios.component.html',
  providers:[HorarioService,ControladorService],
  animations: [fundido]
})
export class HorariosComponent implements OnInit{
  public	horario;
  public bombas;
  public Controller;
  uuid="arduino"
  uuidd=[]
  socket;
  public urlSocket:string;

	constructor(
    private horaService:HorarioService,
		private router:Router,
    private ControlService:ControladorService 
    ){
		localStorage.setItem('route','horarios');
     this.urlSocket=GLOBAL.urlSocket;
     this.socket = io(this.urlSocket);
	}
	ngOnInit(){
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
       console.log(this.bombas);
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
console.log(id)
	this.horaService.eliminarHorario(id).subscribe(
      response =>{
        this.horario=response;
        var a = `{"agent":{"uuid":"${uuid}"},"id":"${response.id}"}`
        this.socket.emit('eliminarRiego', a)
        console.log(response);
      },
      error =>{
        
      }
    );

    this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/pages/control/horarios']));
      
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


    
    

	//this.inv.tiempoIntermitencia='00:'+min+':'+sec;

	this.horaService.adicionarNuevaHora(id,Hora+':'+Minuto+':00','00:'+duracion+':00').subscribe(
      response =>{
        var a = `{"agent":{"uuid":"${uuid}"},"hora":"${Hora}:${Minuto}:00","duracion":"00:${duracion}:00","bomba":"${id}","id":"${response.id}"}`
        this.socket.emit('nuevoRiego', a)
        console.log(response);
      },
      error =>{
        
      }
    );
    this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/pages/control/horarios']));
     
	
}
}
