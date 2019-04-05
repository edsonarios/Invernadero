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
var usuario_component_1 = require("./usuario.component");
var reporte_component_1 = require("./reporte/reporte.component");
var info_component_1 = require("./info/info.component");
var monitoreo_component_1 = require("./monitoreo/monitoreo.component");
var horarios_component_1 = require("./horarios/horarios.component");
var control_manual_component_1 = require("./control_manual/control_manual.component");
var routes = [{
        path: '',
        component: usuario_component_1.UsuarioComponent,
        children: [
            {
                path: 'Reporte',
                component: reporte_component_1.ReporteComponent,
            },
            {
                path: 'Info',
                component: info_component_1.InfoComponent,
            },
            {
                path: 'Horarios',
                component: horarios_component_1.HorariosComponent,
            },
            {
                path: 'Control_Manual',
                component: control_manual_component_1.ControlManualComponent,
            },
            {
                path: 'Monitoreo',
                component: monitoreo_component_1.MonitoreoComponent,
            },
            {
                path: 'Cuenta',
                loadChildren: './cuenta/cuenta.module#CuentaModule',
            },
            {
                path: '',
                redirectTo: 'Monitoreo',
                pathMatch: 'full',
            },
        ],
    }];
var UsuarioRoutingModule = /** @class */ (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());
exports.UsuarioRoutingModule = UsuarioRoutingModule;
//# sourceMappingURL=usuario-routing.module.js.map