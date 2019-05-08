import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {
@Input() title: string;
@Input() unidades: string;
@Input() Min: string;
@Input() Max: string;

public minimo=0;
public maximo=10;
  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
    this.cambiaValor();


  }

  cambiaValor(){
    if (this.title=='Temperatura') {
       this.minimo=20;
       this.maximo=25;
    }
    if (this.title=='Humedad') {
       this.minimo=20;
       this.maximo=25;
    }
    if (this.title=='PH') {
       this.minimo=5;
       this.maximo=7;
    }
    
     var numbers = Observable.timer(2000); // Call after 10 second.. Please set your time
    numbers.subscribe(x =>{
      //alert("10 second");
    var random= Math.random() * (this.maximo - this.minimo) + this.minimo;
    this.temperature=random;
    this.cambiaValor();
    });

    
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
