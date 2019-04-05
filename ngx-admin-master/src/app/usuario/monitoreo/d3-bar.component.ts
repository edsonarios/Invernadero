import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel" 
      [gradient]="true">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent implements OnDestroy {
  results = [
    { name: 'Bomba 1', value: 100 },
    { name: 'Bomba 2', value: 30 },
    { name: 'Bomba 3', value: 20 },
    { name: 'Bomba 4', value: 40 },
  ];
  showLegend = false;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'container';
  yAxisLabel = 'porcent';
  colorScheme: any;
  themeSubscription: any;


  constructor(private theme: NbThemeService) {


    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  //  this.NumAleatoreo();
   
  }
NumAleatoreo(){
    var numbers = Observable.timer(5000); // Call after 10 second.. Please set your time
    numbers.subscribe(x =>{
      //alert("10 second");
    this.results[0].value= Math.round(Math.random() * (100 - 0) + 0);
      console.log(this.results);
   this.NumAleatoreo();
    });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
