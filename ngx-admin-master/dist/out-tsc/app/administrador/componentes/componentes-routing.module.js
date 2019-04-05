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
var componentes_component_1 = require("./componentes.component");
var componentes_agregar_controlador_component_1 = require("./componentes_agregar_controlador/componentes_agregar_controlador.component");
var componentes_agregar_pin_component_1 = require("./componentes_agregar_pin/componentes_agregar_pin.component");
var routes = [{
        path: '',
        component: componentes_component_1.ComponentesComponent,
        children: [
            {
                path: 'Controlador',
                component: componentes_agregar_controlador_component_1.ComponentesAgregarControladorComponent,
            },
            {
                path: 'Pin',
                component: componentes_agregar_pin_component_1.ComponentesAgregarPinComponent,
            },
            {
                path: '',
                redirectTo: 'Catalogo',
                pathMatch: 'full',
            },
        ],
    }];
var ComponentesRoutingModule = /** @class */ (function () {
    function ComponentesRoutingModule() {
    }
    ComponentesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ComponentesRoutingModule);
    return ComponentesRoutingModule;
}());
exports.ComponentesRoutingModule = ComponentesRoutingModule;
exports.routedComponents = [
    componentes_component_1.ComponentesComponent,
    componentes_agregar_controlador_component_1.ComponentesAgregarControladorComponent,
    componentes_agregar_pin_component_1.ComponentesAgregarPinComponent,
];
//# sourceMappingURL=componentes-routing.module.js.map