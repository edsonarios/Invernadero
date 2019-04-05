"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var tester_component_1 = require("./tester.component");
var cuentas_component_1 = require("./cuentas/cuentas.component");
var monitoreo_component_1 = require("./monitoreo/monitoreo.component");
var control_manual_component_1 = require("./control_manual/control_manual.component");
var horarios_component_1 = require("./horarios/horarios.component");
var routes = [{
        path: '',
        component: tester_component_1.TesterComponent,
        children: [
            {
                path: 'Cuentas',
                component: cuentas_component_1.CuentasComponent,
            },
            {
                path: 'Monitoreo',
                component: monitoreo_component_1.MonitoreoComponent,
            }, {
                path: 'Control_Manual',
                component: control_manual_component_1.ControlManualComponent,
            }, {
                path: 'Horarios',
                component: horarios_component_1.HorariosComponent,
            },
            {
                path: '',
                redirectTo: 'Cuentas',
                pathMatch: 'full',
            },
        ],
    }];
var TesterRoutingModule = /** @class */ (function () {
    function TesterRoutingModule() {
    }
    TesterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], TesterRoutingModule);
    return TesterRoutingModule;
}());
exports.TesterRoutingModule = TesterRoutingModule;
//# sourceMappingURL=tester-routing.module.js.map