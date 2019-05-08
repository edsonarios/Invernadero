import {Component, OnDestroy, DoCheck} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { Observable } from 'rxjs/Rx';
import { fundido } from '../../../animation';
interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
animations: [fundido]
})
export class DashboardComponent implements OnDestroy,DoCheck {
  public Pagina;
//Productos
  public Producto= "todos";
  public Hortalizas=[
{nombre:'La romana',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/la romana.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Trocadero',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/trocadero.jpg',Desarrollo:'2 Semanas'},
{nombre:'Lollo Rosso',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/lollo rosso.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Escarola',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/escarola.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Radicchio',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/radicchio.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Iceberg',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/iceberg.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Hoja de roble',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/hoja de roble.jpeg',Desarrollo:'2 Semanas'} ];

public Platas_Aromaticas=[
{nombre:'Anis',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/anis.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Hierbabuena',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/hierbabuena.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Manzanilla',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/manzanilla.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Perejil',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/perejil.jpg',Desarrollo:'2 Semanas'}];

public Flores=[
{nombre:'Dalias',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/dalias.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Orquideas',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/orquideas.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Rosas',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/rosas.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Girasoles',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/girasoles.jpeg',Desarrollo:'2 Semanas'}];

public Frutas=[
{nombre:'Fresas',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/Frutilla.jpg',Desarrollo:'2 Semanas'},
{nombre:'Frambuesas',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/frambuesas.jpg',Desarrollo:'2 Semanas'},
{nombre:'Arandanos',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/Arandanos.jpeg',Desarrollo:'2 Semanas'},
{nombre:'Zarzamora',Tmax:'29',tmin:'10',UrlImg:'assets/images/products/zarzamora.jpeg',Desarrollo:'15 Dias'} ];

public Forraje=[
{nombre:'Forraje verde',Tmax:'20',tmin:'15',UrlImg:'assets/images/products/forraje.jpg',Desarrollo:'15 Dias'}];

//Sensores
public Sensor="temperatura";
public Velocidad=23;
//Actuadores
  public Bombas=new Array(2);
  public Ventiladores=new Array(4);
  public Ventanas=new Array(4);
  public Puertas=new Array(2);
  public horario=new Array(2);
  public time=new Array(10);
  

  private alive = true;

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
    this.WindSpeed();
    
  }
  WindSpeed(){
    var numbers = Observable.timer(1000); // Call after 10 second.. Please set your time
    numbers.subscribe(x =>{
      //alert("10 second");
    this.Velocidad= Math.round(Math.random() * (30 - 20) + 20);
   this.WindSpeed();
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
  ngDoCheck(){
    this.Pagina=localStorage.getItem('page');
  }
  GraficaCambio(e){
     if (e.target[0].selected) {
       this.Sensor= "temperatura";
    }
    if (e.target[1].selected) {
      this.Sensor="humedad";
    }
    if (e.target[2].selected) {
      this.Sensor="ph";
    }
    if (e.target[3].selected) {
      this.Sensor="wind";
    }
    /*
    if (e.target[4].selected) {
      this.Sensor="carbono";
    }
    if (e.target[5].selected) {
      this.Sensor="luminicencia";
    }
     if (e.target[5].selected) {
      this.Sensor="conductividad";
    }*/

  }
  cambio(e){
    if (e.target[0].selected) {
       this.Producto= "todos";
    }
    if (e.target[1].selected) {
      this.Producto= "hortalizas";
    }
    if (e.target[2].selected) {
      this.Producto= "plantas";
    }
    if (e.target[3].selected) {
      this.Producto= "flores";
    }
    if (e.target[4].selected) {
      this.Producto= "frutas";
    }
    if (e.target[5].selected) {
      this.Producto= "forraje";
    }


    e.preventDefault();
  }
}

