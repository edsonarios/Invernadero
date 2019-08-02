
import { Router } from '@angular/router';
import { DatosNoti } from '../../../model/datosNoti';
import { GLOBAL } from '../../../service/global';
import { OpcionesService } from '../../../service/opciones.service';
import { fundido } from '../../animation';
import { addSyntheticLeadingComment } from 'typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}
@Component({
  selector: 'ngx-usuario-opAvanzadas',
  styleUrls: ['./opciones.component.scss'],
  templateUrl: './opciones.component.html',
  providers: [OpcionesService],
  animations: [fundido],
})

export class OpcionesComponent implements OnDestroy {

  private alive = true;
  public submitted: boolean;
  solarValue: number;
  restartInvCard: CardSettings = {
    title: 'Reinicio Invernadero',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  restartPCCard: CardSettings = {
    title: 'Reinicio PC',
    iconClass: 'nb-roller-shades',
    type: 'succes',
  };
  backupInvCard: CardSettings = {
    title: 'Backup Invernadero',
    iconClass: 'nb-coffe-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.restartInvCard,
    this.restartPCCard,
    this.backupInvCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.restartInvCard,
          type: 'warning',
        },
        {
          ...this.restartPCCard,
          type: 'primary',
        },
        {
          ...this.backupInvCard,
          type: 'danger',
        },
      ],
      dark: this.commonStatusCardsSet,
    };

  constructor(
    private themeService: NbThemeService,
    private solarService: SolarData,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.submitted = true;
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });
    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }
  ngOnDestroy() {
    this.alive = false;
  }

}