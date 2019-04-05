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
var ngx_echarts_1 = require("ngx-echarts");
var theme_module_1 = require("../../../@theme/theme.module");
var dashboard_component_1 = require("./dashboard.component");
var status_card_component_1 = require("./status-card/status-card.component");
var temperature_component_1 = require("./temperature/temperature.component");
var temperature_dragger_component_1 = require("./temperature/temperature-dragger/temperature-dragger.component");
var security_cameras_component_1 = require("./security-cameras/security-cameras.component");
var electricity_component_1 = require("./electricity/electricity.component");
var electricity_chart_component_1 = require("./electricity/electricity-chart/electricity-chart.component");
var traffic_component_1 = require("./traffic/traffic.component");
var traffic_chart_component_1 = require("./traffic/traffic-chart.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
        this.Valor = localStorage.getItem('page');
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                ngx_echarts_1.NgxEchartsModule,
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                status_card_component_1.StatusCardComponent,
                temperature_dragger_component_1.TemperatureDraggerComponent,
                temperature_component_1.TemperatureComponent,
                security_cameras_component_1.SecurityCamerasComponent,
                electricity_component_1.ElectricityComponent,
                electricity_chart_component_1.ElectricityChartComponent,
                traffic_component_1.TrafficComponent,
                traffic_chart_component_1.TrafficChartComponent,
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map