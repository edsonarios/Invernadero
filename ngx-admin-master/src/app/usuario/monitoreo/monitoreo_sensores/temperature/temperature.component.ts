import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SensorService } from '../../../../../service/sensores.service';
import * as io from 'socket.io-client';

import { GLOBAL } from '../../../../../service/global';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
  providers: [SensorService]
})
export class TemperatureComponent implements OnDestroy {
  @Input() temperatura: string;
  @Input() grados: string;
  @Input() type: string;
  @Input() uuid: string;
  public urlSocket: string;
  socket;

  temperature = 50;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _sensorService: SensorService) {
    

    
    this.socket = io(GLOBAL.urlSocket)
    this.grados = 'Grados'
    var typo = 'sensor1'

    
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
  ngAfterViewInit(): void {
    var valor=[]
    this._sensorService.sensor(this.type,this.uuid).subscribe(
      response =>{
        //this.datos = response
        if (Array.isArray(response)) {
          response.forEach(m => {
            
            valor.push(m.value)
            //this.temperatura = m.type
            //console.log(m.type)
          })
        }
        
        this.temperature =valor[0]
        //console.log(response)
      },
      error =>{
        console.log(<any>error)
      }
    )
    this.actualiza()
    this.startRealtime()
  }


  async startRealtime(){
    
    this.socket.on('agent/message', payload => {
      const metric = payload.metrics.find(m => m.type === this.type)
      
        //añadimos el nuevo dato
        this.temperature =metric.value

        
    })
    
    
  }
  actualiza(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

