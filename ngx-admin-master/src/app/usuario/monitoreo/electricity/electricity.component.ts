import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/data/electricity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { ElectricityService } from '../../../@core/data/electricity.service';
import { SensorService } from '../../../../service/sensores.service';
@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
   providers: [ElectricityService,SensorService]
})
export class ElectricityComponent implements OnDestroy {

  @Input() type: string;
  @Input() uuid: string;
  data: Array<any>;
  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart[];


  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private electricityService: ElectricityData,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    forkJoin(
      this.electricityService.getListData(),
      this.electricityService.getChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([listData, chartData]: [Electricity[], ElectricityChart[]] ) => {
        this.listData = listData;
        this.chartData = chartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
