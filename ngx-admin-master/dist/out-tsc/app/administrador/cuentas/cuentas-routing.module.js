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
var cuentas_component_1 = require("./cuentas.component");
var cuentas_agregar_component_1 = require("./cuentas_agregar/cuentas_agregar.component");
var cuentas_detalle_component_1 = require("./cuentas_detalle/cuentas_detalle.component");
var cuentas_editar_component_1 = require("./cuentas_editar/cuentas_editar.component");
var cuentas_perfil_component_1 = require("./cuentas_perfil/cuentas_perfil.component");
var cuentas_usuarios_component_1 = require("./cuentas_usuarios/cuentas_usuarios.component");
var routes = [{
        path: '',
        component: cuentas_component_1.CuentasComponent,
        children: [
            {
                path: 'Agregar',
                component: cuentas_agregar_component_1.CuentasAgregarComponent,
            },
            {
                path: 'Detalle',
                component: cuentas_detalle_component_1.CuentasDetalleComponent,
            },
            {
                path: 'Editar',
                component: cuentas_editar_component_1.CuentasEditarComponent,
            },
            {
                path: 'Perfil',
                component: cuentas_perfil_component_1.CuentasPerfilComponent,
            },
            {
                path: 'Usuarios',
                component: cuentas_usuarios_component_1.CuentasUsuariosComponent,
            },
            {
                path: '',
                redirectTo: 'Usuarios',
                pathMatch: 'full',
            },
        ],
    }];
var CuentasRoutingModule = /** @class */ (function () {
    function CuentasRoutingModule() {
    }
    CuentasRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], CuentasRoutingModule);
    return CuentasRoutingModule;
}());
exports.CuentasRoutingModule = CuentasRoutingModule;
exports.routedComponents = [
    cuentas_component_1.CuentasComponent,
    cuentas_agregar_component_1.CuentasAgregarComponent,
    cuentas_detalle_component_1.CuentasDetalleComponent,
    cuentas_editar_component_1.CuentasEditarComponent,
    cuentas_perfil_component_1.CuentasPerfilComponent,
    cuentas_usuarios_component_1.CuentasUsuariosComponent,
];
//# sourceMappingURL=cuentas-routing.module.js.map