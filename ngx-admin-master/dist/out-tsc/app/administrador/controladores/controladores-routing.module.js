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
var controladores_component_1 = require("./controladores.component");
var controladores_agregar_component_1 = require("./controladores_agregar/controladores_agregar.component");
var controladores_catalogo_component_1 = require("./controladores_catalogo/controladores_catalogo.component");
var routes = [{
        path: '',
        component: controladores_component_1.ControladoresComponent,
        children: [
            {
                path: 'Catalogo',
                component: controladores_catalogo_component_1.ControladoresCatalogoComponent,
            },
            {
                path: 'Agregar',
                component: controladores_agregar_component_1.ControladoresAgregarComponent,
            },
            {
                path: '',
                redirectTo: 'Catalogo',
                pathMatch: 'full',
            },
        ],
    }];
var ControladoresRoutingModule = /** @class */ (function () {
    function ControladoresRoutingModule() {
    }
    ControladoresRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ControladoresRoutingModule);
    return ControladoresRoutingModule;
}());
exports.ControladoresRoutingModule = ControladoresRoutingModule;
exports.routedComponents = [
    controladores_component_1.ControladoresComponent,
    controladores_agregar_component_1.ControladoresAgregarComponent,
    controladores_catalogo_component_1.ControladoresCatalogoComponent,
];
//# sourceMappingURL=controladores-routing.module.js.map