import { Component, OnDestroy , Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../../@core/data/electricity.service';
import { SensorService } from '../../../../../service/sensores.service';
@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
  providers: [ElectricityService,SensorService]
})
export class ElectricityComponent implements OnDestroy {

 @Input() type: string;
  @Input() descripcion: string;
  @Input() uuid: string;
  data: Array<any>;

  currentTheme: string;
  themeSubscription: any;
  constructor(private eService: ElectricityService, private themeService: NbThemeService,
    private _sensorService: SensorService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
