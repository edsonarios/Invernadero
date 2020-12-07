import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../service/global';
import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';
import { InvernaderoInterf, agenteMessage } from '../../../../model/interfaces';
@Component({
   selector: 'ngx-chart-sensor',
   styleUrls: ['./chart.component.scss'],
   templateUrl: './chart.component.html',
   providers: [InvernaderoService],
})
export class ChartSensorCompoent implements OnDestroy, OnInit {
   @Input() title: string;
   @Input() type: string;
   @Input() uuid: string;
   public urlSocket: string;
   socket;

   public value = 0;
   public TempMax;
   public TempMin;
   public TempMedia;
   public inv: InvernaderoInterf;
   public invernaderoArray: InvernaderoInterf[] = [];

   public tipo = 'Temperatura';

   constructor(
      private theme: NbThemeService,
      private invService: InvernaderoService
   ) {
      // this.inv = new Invernadero(
      //     localStorage.getItem('user_inv_id'),
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     '',
      //     ''
      // );
      this.inv = {
         createdAt: '',
         departamento: '',
         id: parseInt(localStorage.getItem('user_inv_id')),
         logo: '',
         provincia: '',
         tempMaxima: '',
         tempMedia: '',
         tempMinima: '',
         tiempoFuncionMotor: '',
         tiempoIntermitencia: '',
         tiempoPausa: '',
         ubicacion: '',
         updatedAt: '',
         usuarioId: 0,
      };
      this.invService.show(this.inv).subscribe(
         (response: InvernaderoInterf[]) => {
            // console.log('[CHART][response]', response);
            this.invernaderoArray = [...response];
            this.inv = this.invernaderoArray.pop();
            // console.log('[CHART][invService]', this.inv);
            this.TempMax = this.inv.tempMaxima;
            this.TempMedia = this.inv.tempMedia;
            this.TempMin = this.inv.tempMinima;
            // this.TempMax = this.inv[0]['tempMaxima'];
            // this.TempMedia = this.inv[0]['tempMedia'];
            // this.TempMin = this.inv[0]['tempMinima'];
         },
         (error) => {
            console.log('[ERROR INVSERVICE]', <any>error);
         }
      );

      this.socket = io(GLOBAL.urlSocket);
   }
   ngOnInit() {
      this.startRealtime();
   }
   async startRealtime() {
      this.socket.on('agent/message', (payload: agenteMessage) => {
         // console.log('[PAYLOAD][agent]', payload.agent);
         // console.log('[PAYLOAD][metrics]', payload.metrics);
         // console.log('[PAYLOAD][timestamp]', payload.timestamp);
         // console.log('[CHART][@Input type]', this.type);
         const metric = payload.metrics.find((m) => m.type === this.type);
         // console.log('[CHART][metric]', metric);
         this.value = metric.value;
         //  console.log("El nuevo valor es:" +metric.value);
      });
   }

   ngOnDestroy(): void {}
}
