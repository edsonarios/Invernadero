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
var administrador_component_1 = require("./administrador.component");
var reportes_component_1 = require("./reportes/reportes.component");
var routes = [{
        path: '',
        component: administrador_component_1.AdministradorComponent,
        children: [
            {
                path: 'Controladores',
                loadChildren: './controladores/controladores.module#ControladoresModule',
            },
            {
                path: 'Cuentas',
                loadChildren: './cuentas/cuentas.module#CuentasModule',
            },
            {
                path: 'Invernaderos',
                loadChildren: './invernaderos/invernaderos.module#InvernaderosModule',
            },
            {
                path: 'Componentes',
                loadChildren: './componentes/componentes.module#ComponentesModule',
            },
            {
                path: 'Reportes',
                component: reportes_component_1.ReportesComponent,
            },
            {
                path: '',
                redirectTo: 'Cuentas',
                pathMatch: 'full',
            },
        ],
    }];
var AdministradorRoutingModule = /** @class */ (function () {
    function AdministradorRoutingModule() {
    }
    AdministradorRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], AdministradorRoutingModule);
    return AdministradorRoutingModule;
}());
exports.AdministradorRoutingModule = AdministradorRoutingModule;
//# sourceMappingURL=administrador-routing.module.js.map