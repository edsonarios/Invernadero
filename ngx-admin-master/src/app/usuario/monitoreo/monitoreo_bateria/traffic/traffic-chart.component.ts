import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../../service/global';
declare const echarts: any;

var points = [50];

@Component({
  selector: 'ngx-traffic-chart',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <div echarts [options]="option" class="echart"></div>
  `,
})
export class TrafficChartComponent implements AfterViewInit, OnDestroy {
  
  type = 'month';
  types = ['week', 'month', 'year'];
  option: any = {};
  themeSubscription: any;

  public urlSocket:string;
  socket;

  constructor(private theme: NbThemeService) {
    this.urlSocket=GLOBAL.urlSocket;
    this.socket = io(this.urlSocket);
  }

  ngAfterViewInit() {
    
    this.actualiza()
    this.startRealtime()
  }

  async startRealtime(){
    
    this.socket.on('arduino', payload => {
      
      //console.log(payload)
      points.push(parseFloat(payload.bateria))
      
        // // Remove first element if length > 10
        const length = points.length

         if (length >= 10) { 
           points.shift()
           
         }

        this.actualiza()
        //console.log(this.data)
    })
    
    
  }
  async actualiza(){
    this.themeSubscription = this.theme.getJsTheme().pipe(delay(1)).subscribe(config => {

      const trafficTheme: any = config.variables.traffic;

      this.option = Object.assign({}, {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: points,
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
              color: trafficTheme.colorBlack,
              opacity: 0.06,
              width: '1',
            },
          },
        },
        tooltip: {
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: trafficTheme.tooltipTextColor,
            fontWeight: trafficTheme.tooltipFontWeight,
            fontSize: 16,
          },
          position: 'middle',
          backgroundColor: trafficTheme.tooltipBg,
          borderColor: trafficTheme.tooltipBorderColor,
          borderWidth: 3,

          // AQUI SE ASIGNA EL VALOR Y LAS UNIDADES COMO SE VERAN
          // EJEMPLO
          //formatter: '{c0} %<br>HH:MM:SS',
           formatter: '{c0} %',
          extraCssText: trafficTheme.tooltipExtraCss,
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            sampling: 'average',
            silent: true,
            itemStyle: {
              normal: {
                color: trafficTheme.shadowLineDarkBg,
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: trafficTheme.shadowLineDarkBg,
              },
            },
            data: points.map(p => p - 15),
          },
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: trafficTheme.itemColor,
                borderColor: trafficTheme.itemBorderColor,
                borderWidth: 2,
              },
              emphasis: {
                color: 'white',
                borderColor: trafficTheme.itemEmphasisBorderColor,
                borderWidth: 2,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: trafficTheme.lineBg,
                shadowColor: trafficTheme.lineBg,
                shadowBlur: trafficTheme.lineShadowBlur,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: trafficTheme.gradFrom,
                }, {
                  offset: 1,
                  color: trafficTheme.gradTo,
                }]),
                opacity: 1,
              },
            },
            data: points,
          },
        ],
      });
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
