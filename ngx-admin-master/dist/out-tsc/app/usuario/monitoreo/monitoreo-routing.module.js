"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var monitoreo_component_1 = require("./monitoreo.component");
var monitoreo_actuadores_component_1 = require("./monitoreo_actuadores/monitoreo_actuadores.component");
var monitoreo_bateria_component_1 = require("./monitoreo_bateria/monitoreo_bateria.component");
var monitoreo_camaras_component_1 = require("./monitoreo_camaras/monitoreo_camaras.component");
var monitoreo_sensores_component_1 = require("./monitoreo_sensores/monitoreo_sensores.component");
var temperature_component_1 = require("./monitoreo_sensores/temperature/temperature.component");
var temperature_dragger_component_1 = require("./monitoreo_sensores/temperature/temperature-dragger/temperature-dragger.component");
var electricity_component_1 = require("./monitoreo_sensores/electricity/electricity.component");
var electricity_chart_component_1 = require("./monitoreo_sensores/electricity/electricity-chart/electricity-chart.component");
var security_cameras_component_1 = require("./monitoreo_camaras/security-cameras/security-cameras.component");
var traffic_component_1 = require("./monitoreo_bateria/traffic/traffic.component");
var traffic_chart_component_1 = require("./monitoreo_bateria/traffic/traffic-chart.component");
var routes = [{
        path: '',
        component: monitoreo_component_1.MonitoreoComponent,
        children: [
            {
                path: 'Actuadores',
                component: monitoreo_actuadores_component_1.MonitoreoActuadoresComponent,
            },
            {
                path: 'Energia',
                component: monitoreo_bateria_component_1.MonitoreoBateriaComponent,
            },
            {
                path: 'Camaras',
                component: monitoreo_camaras_component_1.MonitoreoCamarasComponent,
            },
            {
                path: 'Sensores',
                component: monitoreo_sensores_component_1.MonitoreoSensoresComponent,
            },
        ],
    }];
var MonitoreoRoutingModule = /** @class */ (function () {
    function MonitoreoRoutingModule() {
    }
    MonitoreoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], MonitoreoRoutingModule);
    return MonitoreoRoutingModule;
}());
exports.MonitoreoRoutingModule = MonitoreoRoutingModule;
exports.routedComponents = [
    monitoreo_component_1.MonitoreoComponent,
    monitoreo_actuadores_component_1.MonitoreoActuadoresComponent,
    monitoreo_bateria_component_1.MonitoreoBateriaComponent,
    monitoreo_camaras_component_1.MonitoreoCamarasComponent,
    monitoreo_sensores_component_1.MonitoreoSensoresComponent,
    temperature_component_1.TemperatureComponent,
    temperature_dragger_component_1.TemperatureDraggerComponent,
    electricity_component_1.ElectricityComponent,
    electricity_chart_component_1.ElectricityChartComponent,
    security_cameras_component_1.SecurityCamerasComponent,
    traffic_component_1.TrafficComponent,
    traffic_chart_component_1.TrafficChartComponent
];
//# sourceMappingURL=monitoreo-routing.module.js.map