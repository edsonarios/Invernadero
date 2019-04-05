"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
//import { ToasterModule } from 'angular2-toaster';
var theme_module_1 = require("../../@theme/theme.module");
var invernaderos_routing_module_1 = require("./invernaderos-routing.module");
var InvernaderosModule = /** @class */ (function () {
    function InvernaderosModule() {
    }
    InvernaderosModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                invernaderos_routing_module_1.InvernaderosRoutingModule,
                theme_1.NbBadgeModule,
            ],
            declarations: invernaderos_routing_module_1.routedComponents.slice(),
        })
    ], InvernaderosModule);
    return InvernaderosModule;
}());
exports.InvernaderosModule = InvernaderosModule;
//# sourceMappingURL=invernaderos.module.js.map