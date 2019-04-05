"use strict";
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
var Rx_1 = require("rxjs/Rx");
var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.minimo = 0;
        this.maximo = 10;
        this.temperature = 24;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
        });
        this.cambiaValor();
    }
    TemperatureComponent.prototype.cambiaValor = function () {
        var _this = this;
        if (this.title == 'Temperatura') {
            this.minimo = 20;
            this.maximo = 25;
        }
        if (this.title == 'Humedad') {
            this.minimo = 20;
            this.maximo = 25;
        }
        if (this.title == 'PH') {
            this.minimo = 5;
            this.maximo = 7;
        }
        var numbers = Rx_1.Observable.timer(2000); // Call after 10 second.. Please set your time
        numbers.subscribe(function (x) {
            //alert("10 second");
            var random = Math.random() * (_this.maximo - _this.minimo) + _this.minimo;
            _this.temperature = random;
            _this.cambiaValor();
        });
    };
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TemperatureComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TemperatureComponent.prototype, "unidades", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TemperatureComponent.prototype, "Min", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TemperatureComponent.prototype, "Max", void 0);
    TemperatureComponent = __decorate([
        core_1.Component({
            selector: 'ngx-temperature',
            styleUrls: ['./temperature.component.scss'],
            templateUrl: './temperature.component.html',
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TemperatureComponent);
    return TemperatureComponent;
}());
exports.TemperatureComponent = TemperatureComponent;
//# sourceMappingURL=temperature.component.js.map