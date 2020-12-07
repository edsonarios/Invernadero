import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

import { GLOBAL } from '../../../../service/global';

import { Invernadero } from '../../../../model/invernadero';
@Component({
   selector: 'ngx-span-flujo',
   template: `
      <span
         class="parameter-value text-info"
         *ngIf="valueFlujoBomba != 1 && valueFlujoBomba != 0"
         >- - -</span
      >
      <span class="parameter-value text-success" *ngIf="valueFlujoBomba == 1"
         >SI</span
      >
      <span class="parameter-value text-danger" *ngIf="valueFlujoBomba == 0"
         >NO</span
      >
   `,
})
export class SpanComponent implements OnDestroy {
   @Input() type: string;
   @Input() uuid: string;
   public urlSocket: string;
   socket;

   value = 0;
   public TempMax;
   public TempMin;
   public TempMedia;

   valueFlujoBomba;

   constructor(private theme: NbThemeService) {
      // console.log("==============");
      //console.log(this.type);
      // console.log(this.uuid);
      //console.log("================");

      this.socket = io(GLOBAL.urlSocket);

      //   this.startRealtime()
   }

   async startRealtime() {
      this.socket.on('agent/message', (payload) => {
         const metric = payload.metrics.find((m) => m.type === this.type);

         //añadimos el nuevo dato
         this.valueFlujoBomba = parseInt(metric.value);
         //  console.log("El nuevo valor es:" +metric.value);
      });
   }

   ngOnDestroy(): void {}
}
