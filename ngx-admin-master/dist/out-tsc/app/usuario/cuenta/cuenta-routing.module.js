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
var cuenta_component_1 = require("./cuenta.component");
var cuenta_editar_component_1 = require("./cuenta_editar/cuenta_editar.component");
var cuenta_perfil_component_1 = require("./cuenta_perfil/cuenta_perfil.component");
var routes = [{
        path: '',
        component: cuenta_component_1.CuentaComponent,
        children: [
            {
                path: 'Editar',
                component: cuenta_editar_component_1.CuentaEditarComponent,
            },
            {
                path: 'Perfil',
                component: cuenta_perfil_component_1.CuentaPerfilComponent,
            },
        ],
    }];
var CuentaRoutingModule = /** @class */ (function () {
    function CuentaRoutingModule() {
    }
    CuentaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], CuentaRoutingModule);
    return CuentaRoutingModule;
}());
exports.CuentaRoutingModule = CuentaRoutingModule;
exports.routedComponents = [
    cuenta_component_1.CuentaComponent,
    cuenta_editar_component_1.CuentaEditarComponent,
    cuenta_perfil_component_1.CuentaPerfilComponent,
];
//# sourceMappingURL=cuenta-routing.module.js.map