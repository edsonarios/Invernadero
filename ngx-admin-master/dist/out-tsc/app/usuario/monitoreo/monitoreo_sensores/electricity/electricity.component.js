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
var electricity_service_1 = require("../../../../@core/data/electricity.service");
var sensores_service_1 = require("../../../../../service/sensores.service");
var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(eService, themeService, _sensorService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this._sensorService = _sensorService;
        this.data = this.eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElectricityComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElectricityComponent.prototype, "descripcion", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElectricityComponent.prototype, "uuid", void 0);
    ElectricityComponent = __decorate([
        core_1.Component({
            selector: 'ngx-electricity',
            styleUrls: ['./electricity.component.scss'],
            templateUrl: './electricity.component.html',
            providers: [electricity_service_1.ElectricityService, sensores_service_1.SensorService]
        }),
        __metadata("design:paramtypes", [electricity_service_1.ElectricityService, theme_1.NbThemeService,
            sensores_service_1.SensorService])
    ], ElectricityComponent);
    return ElectricityComponent;
}());
exports.ElectricityComponent = ElectricityComponent;
//# sourceMappingURL=electricity.component.js.map