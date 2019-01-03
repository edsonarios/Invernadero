import { Component, OnDestroy , Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
   providers: [ElectricityService]
})
export class ElectricityComponent implements OnDestroy {
@Input() title: string;
  data: Array<any>;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
