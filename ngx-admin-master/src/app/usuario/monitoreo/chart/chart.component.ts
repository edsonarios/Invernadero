import { Component, OnDestroy , Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

import { GLOBAL } from '../../../../service/global';

import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';
@Component({
  selector: 'ngx-chart-sensor',
  styleUrls: ['./chart.component.scss'],
   providers: [InvernaderoService],
  template: `
  <div class="daily-forecast" *ngIf="type.substring(7,14)=='tempera'">
   <div class="Title" >
        <span>{{title}}</span>
    </div>
         <div class="info">
            <div class="temperature">
                  <span>{{value}}&deg;</span>
            </div>
            <div class="icon">
             <i class="ion-leaf" *ngIf="value==0"></i>
                 <i class="ion-leaf text-success" *ngIf="value>=TempMedia-5&&value<=TempMedia+5"></i>
              <div class="animado2">
                 <i class="ion-leaf text-warning" *ngIf="value>TempMedia+5&&value<TempMax"></i>
              </div>
              <div class="animado">
                 <i class="ion-leaf text-danger" *ngIf="value>=TempMax"></i>
               </div>
             </div>   
         </div>
</div>
<div class="daily-forecast" *ngIf="type.substring(7,14)=='humedad'">
   <div class="Title" >
        <span>{{title}}</span>
    </div>
    <div class="info">
        <div class="temperature">
            <span>{{value}}&deg;</span>
            </div>
            <div class="icon">
                <i class="ion-thermometer" *ngIf="value==0"></i>
                <i class="ion-thermometer text-primary" *ngIf="value!=0"></i>
            </div>
    </div>
</div>
 <div class="daily-forecast" *ngIf="type.substring(7,13)=='Tanque'">
   <div class="Title" >
        <span>{{title}}</span>
    </div>
         <div class="info">
            <div class="temperature">
                  <span>{{value}} %</span>
            </div>
            <div class="icon">
               <i class="ion-beaker"></i>
             </div>   
         </div>
</div>
 <div class="daily-forecast" *ngIf="type.substring(7,11)=='Agua'">
   <div class="Title" >
        <span>{{title}}</span>
    </div>
         <div class="info">
            <div class="temperature">
                  <span>{{value}}</span>
            </div>
            <div class="icon">
                <i class="ion-waterdrop" *ngIf="value==0"></i>
                <i class="ion-waterdrop text-primary" *ngIf="value!=0"></i>          
             </div>   
         </div>
</div>
  `,
})
export class ChartSensorCompoent implements OnDestroy {
 @Input() title: string;
  @Input() type: string;
  @Input() uuid: string; 
  public urlSocket: string;
  socket;

  value=0;
  public TempMax;
  public TempMin;
  public TempMedia;
public inv: Invernadero;

public tipo="Temperatura";

  constructor(
     private theme: NbThemeService,
     private invService: InvernaderoService) {
    this.inv = new Invernadero(localStorage.getItem('user_inv_id'),'','','','','','','','','','','');
  this.invService.show(this.inv).subscribe(
      response =>{
            this.inv=response;
            this.TempMax=this.inv[0]['tempMaxima'];
            this.TempMedia=this.inv[0]['tempMedia'];
            this.TempMin=this.inv[0]['tempMinima'];   
      },
      error =>{
        console.log(<any>error);
      }
    );

    this.socket = io(GLOBAL.urlSocket)

  this.startRealtime()

  }

  async startRealtime(){
    
    this.socket.on('agent/message', payload => {
      const metric = payload.metrics.find(m => m.type === this.type)
      
        //añadimos el nuevo dato
        this.value =parseInt(metric.value);
      //  console.log("El nuevo valor es:" +metric.value);  
    })
    
    
  }

  ngOnDestroy(): void {
    
  }
}
