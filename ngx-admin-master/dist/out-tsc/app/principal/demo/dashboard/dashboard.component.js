"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var takeWhile_1 = require("rxjs/operators/takeWhile");
var Rx_1 = require("rxjs/Rx");
var animation_1 = require("../../../animation");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        //Productos
        this.Producto = "todos";
        this.Hortalizas = [
            { nombre: 'La romana', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/la romana.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Trocadero', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/trocadero.jpg', Desarrollo: '2 Semanas' },
            { nombre: 'Lollo Rosso', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/lollo rosso.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Escarola', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/escarola.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Radicchio', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/radicchio.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Iceberg', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/iceberg.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Hoja de roble', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/hoja de roble.jpeg', Desarrollo: '2 Semanas' }
        ];
        this.Platas_Aromaticas = [
            { nombre: 'Anis', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/anis.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Hierbabuena', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/hierbabuena.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Manzanilla', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/manzanilla.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Perejil', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/perejil.jpg', Desarrollo: '2 Semanas' }
        ];
        this.Flores = [
            { nombre: 'Dalias', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/dalias.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Orquideas', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/orquideas.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Rosas', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/rosas.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Girasoles', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/girasoles.jpeg', Desarrollo: '2 Semanas' }
        ];
        this.Frutas = [
            { nombre: 'Fresas', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/Frutilla.jpg', Desarrollo: '2 Semanas' },
            { nombre: 'Frambuesas', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/frambuesas.jpg', Desarrollo: '2 Semanas' },
            { nombre: 'Arandanos', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/Arandanos.jpeg', Desarrollo: '2 Semanas' },
            { nombre: 'Zarzamora', Tmax: '29', tmin: '10', UrlImg: 'assets/images/products/zarzamora.jpeg', Desarrollo: '15 Dias' }
        ];
        this.Forraje = [
            { nombre: 'Forraje verde', Tmax: '20', tmin: '15', UrlImg: 'assets/images/products/forraje.jpg', Desarrollo: '15 Dias' }
        ];
        //Sensores
        this.Sensor = "temperatura";
        this.Velocidad = 23;
        //Actuadores
        this.Bombas = new Array(2);
        this.Ventiladores = new Array(4);
        this.Ventanas = new Array(4);
        this.Puertas = new Array(2);
        this.horario = new Array(2);
        this.time = new Array(10);
        this.alive = true;
        this.lightCard = {
            title: 'Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.rollerShadesCard = {
            title: 'Roller Shades',
            iconClass: 'nb-roller-shades',
            type: 'success',
        };
        this.wirelessAudioCard = {
            title: 'Wireless Audio',
            iconClass: 'nb-audio',
            type: 'info',
        };
        this.coffeeMakerCard = {
            title: 'Coffee Maker',
            iconClass: 'nb-coffee-maker',
            type: 'warning',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
            this.rollerShadesCard,
            this.wirelessAudioCard,
            this.coffeeMakerCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                __assign({}, this.lightCard, { type: 'warning' }),
                __assign({}, this.rollerShadesCard, { type: 'primary' }),
                __assign({}, this.wirelessAudioCard, { type: 'danger' }),
                __assign({}, this.coffeeMakerCard, { type: 'secondary' }),
            ],
        };
        this.themeService.getJsTheme()
            .pipe(takeWhile_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.statusCards = _this.statusCardsByThemes[theme.name];
        });
        this.WindSpeed();
    }
    DashboardComponent.prototype.WindSpeed = function () {
        var _this = this;
        var numbers = Rx_1.Observable.timer(1000); // Call after 10 second.. Please set your time
        numbers.subscribe(function (x) {
            //alert("10 second");
            _this.Velocidad = Math.round(Math.random() * (30 - 20) + 20);
            _this.WindSpeed();
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent.prototype.ngDoCheck = function () {
        this.Pagina = localStorage.getItem('page');
    };
    DashboardComponent.prototype.GraficaCambio = function (e) {
        if (e.target[0].selected) {
            this.Sensor = "temperatura";
        }
        if (e.target[1].selected) {
            this.Sensor = "humedad";
        }
        if (e.target[2].selected) {
            this.Sensor = "ph";
        }
        if (e.target[3].selected) {
            this.Sensor = "wind";
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
    };
    DashboardComponent.prototype.cambio = function (e) {
        if (e.target[0].selected) {
            this.Producto = "todos";
        }
        if (e.target[1].selected) {
            this.Producto = "hortalizas";
        }
        if (e.target[2].selected) {
            this.Producto = "plantas";
        }
        if (e.target[3].selected) {
            this.Producto = "flores";
        }
        if (e.target[4].selected) {
            this.Producto = "frutas";
        }
        if (e.target[5].selected) {
            this.Producto = "forraje";
        }
        e.preventDefault();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dashboard',
            styleUrls: ['./dashboard.component.scss'],
            templateUrl: './dashboard.component.html',
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map