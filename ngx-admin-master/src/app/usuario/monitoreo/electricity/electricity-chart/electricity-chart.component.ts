import { delay, takeWhile } from 'rxjs/operators';
import {
   AfterViewInit,
   Component,
   Input,
   OnDestroy,
   OnInit,
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../../@core/utils';
import { ElectricityChart } from '../../../../@core/data/electricity';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../../service/global';
import { SensorService } from '../../../../../service/sensores.service';
@Component({
   selector: 'ngx-electricity-chart',
   styleUrls: ['./electricity-chart.component.scss'],
   providers: [SensorService],
   template: `
      <div
         echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)"
      ></div>
   `,
})
export class ElectricityChartComponent implements AfterViewInit, OnDestroy {
   private alive = true;
   @Input() type: string;
   @Input() uuid: string;

   @Input() data: ElectricityChart[];

   public urlSocket: string;

   public datos;
   labels = [];
   datosM = [];
   socket;
   option: any;
   echartsIntance: any;

   constructor(
      private theme: NbThemeService,
      private layoutService: LayoutService,
      private _sensorService: SensorService
   ) {
      this.urlSocket = GLOBAL.urlSocket;
      this.socket = io(this.urlSocket);
      this.layoutService
         .onChangeLayoutSize()
         .pipe(takeWhile(() => this.alive))
         .subscribe(() => this.resizeChart());
   }

   ngOnInit() {
      const valor = [];
      const fecha = [];

      this._sensorService.sensor(this.type, this.uuid).subscribe(
         (response) => {
            //this.datos = response
            if (Array.isArray(response)) {
               response.forEach((m) => {
                  valor.push(parseInt(m.value));
                  let hora = parseInt(m.createdAt.substring(11, 13));
                  if (hora === 0 || hora === 1 || hora === 2 || hora === 3) {
                     hora = +21;
                  } else {
                     hora = -4;
                  }
                  fecha.push(hora + '' + m.createdAt.substring(13, 16));
               });
            }
            valor.reverse();
            this.data = valor.map((p, index) => ({
               //deberia ser valor fecha
               label: fecha[index],
               //valor de la metrica
               value: p,
            }));
         },
         (error) => {
            console.log(<any>error);
         }
      );
   }
   async startRealtime() {
      this.socket.on('agent/message', (payload) => {
         //console.log(payload)

         const metric = payload.metrics.find((m) => m.type === this.type);

         //sacamos la hora del sistema para la grafica
         const hora = new Date();

         // Copy current values
         this.labels = this.data.map((i) => i.label);
         this.datosM = this.data.map((i) => i.value);

         // Remove first element if length > 20
         const length = this.labels.length || this.datosM.length;

         if (length >= 10) {
            this.labels.shift();
            this.datosM.shift();
         }
         //insertamos los nuevos datos
         this.labels.push(hora.getHours() + ':' + hora.getMinutes());
         this.datosM.push(metric.value);

         this.data = this.datosM.map((p, index) => ({
            //deberia ser valor fecha
            label: this.labels[index],
            //valor de la metrica
            value: p,
         }));

         this.actualiza();
      });
   }
   ngAfterViewInit(): void {
      this.actualiza();
      this.startRealtime();
   }

   actualiza() {
      this.theme
         .getJsTheme()
         .pipe(
            takeWhile(() => this.alive),
            delay(1)
         )
         .subscribe((config) => {
            const eTheme: any = config.variables.electricity;

            this.option = {
               grid: {
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 80,
               },
               tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                     type: 'line',
                     lineStyle: {
                        color: eTheme.tooltipLineColor,
                        width: eTheme.tooltipLineWidth,
                     },
                  },
                  textStyle: {
                     color: eTheme.tooltipTextColor,
                     fontSize: 20,
                     fontWeight: eTheme.tooltipFontWeight,
                  },
                  position: 'top',
                  backgroundColor: eTheme.tooltipBg,
                  borderColor: eTheme.tooltipBorderColor,
                  borderWidth: 3,
                  formatter: '{c0} ºC',
                  extraCssText: eTheme.tooltipExtraCss,
               },
               xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  offset: 25,
                  data: this.data.map((i) => i.label),
                  axisTick: {
                     show: false,
                  },
                  axisLabel: {
                     color: eTheme.xAxisTextColor,
                     fontSize: 18,
                  },
                  axisLine: {
                     lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '2',
                     },
                  },
               },
               yAxis: {
                  boundaryGap: [0, '5%'],
                  axisLine: {
                     show: false,
                  },
                  axisLabel: {
                     show: false,
                  },
                  axisTick: {
                     show: false,
                  },
                  splitLine: {
                     show: true,
                     lineStyle: {
                        color: eTheme.yAxisSplitLine,
                        width: '1',
                     },
                  },
               },
               series: [
                  {
                     type: 'line',
                     smooth: true,
                     symbolSize: 20,
                     itemStyle: {
                        normal: {
                           opacity: 0,
                        },
                        emphasis: {
                           color: '#ffffff',
                           borderColor: eTheme.itemBorderColor,
                           borderWidth: 2,
                           opacity: 1,
                        },
                     },
                     lineStyle: {
                        normal: {
                           width: eTheme.lineWidth,
                           type: eTheme.lineStyle,
                           color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                 {
                                    offset: 0,
                                    color: eTheme.lineGradFrom,
                                 },
                                 {
                                    offset: 1,
                                    color: eTheme.lineGradTo,
                                 },
                              ]
                           ),
                           shadowColor: eTheme.lineShadow,
                           shadowBlur: 6,
                           shadowOffsetY: 12,
                        },
                     },
                     areaStyle: {
                        normal: {
                           color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                 {
                                    offset: 0,
                                    color: eTheme.areaGradFrom,
                                 },
                                 {
                                    offset: 1,
                                    color: eTheme.areaGradTo,
                                 },
                              ]
                           ),
                        },
                     },
                     data: this.data.map((i) => i.value),
                  },

                  {
                     type: 'line',
                     smooth: true,
                     symbol: 'none',
                     lineStyle: {
                        normal: {
                           width: eTheme.lineWidth,
                           type: eTheme.lineStyle,
                           color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                 {
                                    offset: 0,
                                    color: eTheme.lineGradFrom,
                                 },
                                 {
                                    offset: 1,
                                    color: eTheme.lineGradTo,
                                 },
                              ]
                           ),
                           shadowColor: eTheme.shadowLineDarkBg,
                           shadowBlur: 14,
                           opacity: 1,
                        },
                     },
                     data: this.data.map((i) => i.value),
                  },
               ],
            };
         });
   }

   onChartInit(echarts) {
      this.echartsIntance = echarts;
   }

   resizeChart() {
      if (this.echartsIntance) {
         this.echartsIntance.resize();
      }
   }

   ngOnDestroy() {
      this.alive = false;
   }
}
