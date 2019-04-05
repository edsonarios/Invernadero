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
var invernaderos_component_1 = require("./invernaderos.component");
var invernaderos_agregar_component_1 = require("./invernaderos_agregar/invernaderos_agregar.component");
var invernaderos_detalle_component_1 = require("./invernaderos_detalle/invernaderos_detalle.component");
var invernaderos_editar_component_1 = require("./invernaderos_editar/invernaderos_editar.component");
var invernaderos_listar_component_1 = require("./invernaderos_listar/invernaderos_listar.component");
var routes = [{
        path: '',
        component: invernaderos_component_1.InvernaderosComponent,
        children: [
            {
                path: 'Agregar',
                component: invernaderos_agregar_component_1.InvernaderosAgregarComponent,
            },
            {
                path: 'Detalle',
                component: invernaderos_detalle_component_1.InvernaderosDetalleComponent,
            },
            {
                path: 'Editar',
                component: invernaderos_editar_component_1.InvernaderosEditarComponent,
            },
            {
                path: 'Listar',
                component: invernaderos_listar_component_1.InvernaderosListarComponent,
            }
        ],
    }];
var InvernaderosRoutingModule = /** @class */ (function () {
    function InvernaderosRoutingModule() {
    }
    InvernaderosRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], InvernaderosRoutingModule);
    return InvernaderosRoutingModule;
}());
exports.InvernaderosRoutingModule = InvernaderosRoutingModule;
exports.routedComponents = [
    invernaderos_component_1.InvernaderosComponent,
    invernaderos_agregar_component_1.InvernaderosAgregarComponent,
    invernaderos_detalle_component_1.InvernaderosDetalleComponent,
    invernaderos_editar_component_1.InvernaderosEditarComponent,
    invernaderos_listar_component_1.InvernaderosListarComponent
];
//# sourceMappingURL=invernaderos-routing.module.js.map