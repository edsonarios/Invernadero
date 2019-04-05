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
var producto_component_1 = require("./producto.component");
var producto_agregar_component_1 = require("./producto_agregar/producto_agregar.component");
var producto_listar_component_1 = require("./producto_listar/producto_listar.component");
var routes = [{
        path: '',
        component: producto_component_1.ProductoComponent,
        children: [
            {
                path: 'Agregar',
                component: producto_agregar_component_1.ProductoAgregarComponent,
            },
            {
                path: 'Listar',
                component: producto_listar_component_1.ProductoListarComponent,
            },
            {
                path: '',
                redirectTo: 'Listar',
                pathMatch: 'full',
            },
        ],
    }];
var ProductoRoutingModule = /** @class */ (function () {
    function ProductoRoutingModule() {
    }
    ProductoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ProductoRoutingModule);
    return ProductoRoutingModule;
}());
exports.ProductoRoutingModule = ProductoRoutingModule;
exports.routedComponents = [
    producto_component_1.ProductoComponent,
    producto_agregar_component_1.ProductoAgregarComponent,
    producto_listar_component_1.ProductoListarComponent,
];
//# sourceMappingURL=producto-routing.module.js.map