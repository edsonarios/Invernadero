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
var productos_component_1 = require("./productos.component");
var productos_catalogo_component_1 = require("./productos_catalogo/productos_catalogo.component");
var productos_agregar_component_1 = require("./productos_agregar/productos_agregar.component");
var routes = [{
        path: '',
        component: productos_component_1.ProductosComponent,
        children: [
            {
                path: 'Catalogo',
                component: productos_catalogo_component_1.ProductosCatalogoComponent,
            },
            {
                path: 'Agregar',
                component: productos_agregar_component_1.ProductosAgregarComponent,
            },
            {
                path: '',
                redirectTo: 'Catalogo',
                pathMatch: 'full',
            },
        ],
    }];
var ProductosRoutingModule = /** @class */ (function () {
    function ProductosRoutingModule() {
    }
    ProductosRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ProductosRoutingModule);
    return ProductosRoutingModule;
}());
exports.ProductosRoutingModule = ProductosRoutingModule;
exports.routedComponents = [
    productos_component_1.ProductosComponent,
    productos_catalogo_component_1.ProductosCatalogoComponent,
    productos_agregar_component_1.ProductosAgregarComponent,
];
//# sourceMappingURL=productos-routing.module.js.map