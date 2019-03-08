import { Component, OnInit} from '@angular/core';
import { ControladorService } from '../../../../service/controladores.service';
import { SensorService } from '../../../../service/sensores.service';
import { PinesService } from '../../../../service/pines.service';
import { fundido } from '../../../animation';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../service/global';

@Component({
  selector: 'ngx-usuario-monitoreo-actuadores',
  styleUrls: ['./monitoreo_actuadores.component.scss'],
  templateUrl: './monitoreo_actuadores.component.html',
 providers: [ControladorService,SensorService,PinesService],
  animations: [fundido]
})
export class MonitoreoActuadoresComponent implements OnInit{
  public Controller;
public Devices;
public urlSocket: string;
socket;
	
constructor( private ControlService: ControladorService,
  	private _sensorService: SensorService,
    private pinService: PinesService,){	
	  localStorage.setItem('route','Mactuadores');
    this.socket = io(GLOBAL.urlSocket);
}
 ngOnInit(){
    //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
  this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.Controller=response;
        console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
//RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
  this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(
    response=>{
      this.Devices=response;
//      console.log(this.Devices);       
 
      
    },
    error=>{
    console.log(<any>error);
    }
    );
    
    
  
  }
  ngAfterViewInit(): void {
    //estado de los botones en tiempo real
    this.startRealtime()
  }

  async startRealtime(){
    
    this.socket.on('EsActuador', payload => {
      // console.log("pasoo 1")
      // console.log(payload)
      //se actualiza segun actuador y update de mqtt para mostrar el estado de los botones en tiempo real
      //this.variable++

      this.funcionMostrarPinesActuadores()
      
    })

  }
  funcionMostrarPinesActuadores(){
    this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(
      response=>{
        this.Devices=response;
        //console.log(this.Devices);       
        
      },
      error=>{
      console.log(<any>error);
      }
      );
  }
	
}
