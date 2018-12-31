import { Component, OnInit} from '@angular/core';
import { ControladorService } from '../../../service/controladores.service';
import { SensorService } from '../../../service/sensores.service';
import { PinesService } from '../../../service/pines.service';
import { fundido } from '../../../animation';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
@Component({
  selector: 'ngx-actuadores',
  templateUrl: './actuadores.component.html',
  providers: [ControladorService,SensorService,PinesService],
  animations: [fundido]
  
})
export class ActuadoresComponent implements OnInit{
  public Controller;
  public uuid=[];
public Devices;
public urlSocket: string;
socket;
  
  constructor(
    private ControlService: ControladorService,
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
        for (let i = 0; i < this.Controller.length; i++) {
          this.uuid.push(this.Controller[i].uuid)
        }
        
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
      //verifica si el mensaje proveniente es de este usuario
      for (let i = 0; i < this.uuid.length; i++) {
        if(payload.agent.uuid==this.uuid[i]){
          this.funcionMostrarPinesActuadores()
          break;
        }
        
      }

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