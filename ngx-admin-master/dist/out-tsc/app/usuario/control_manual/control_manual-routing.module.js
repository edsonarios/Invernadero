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
var control_manual_component_1 = require("./control_manual.component");
var control_manual_actuadores_component_1 = require("./control_manual_actuadores/control_manual_actuadores.component");
var control_manual_horarios_component_1 = require("./control_manual_horarios/control_manual_horarios.component");
var status_card_component_1 = require("./control_manual_actuadores/status-card/status-card.component");
var status_card_off_component_1 = require("./control_manual_actuadores/status-card-off/status-card-off.component");
var routes = [{
        path: '',
        component: control_manual_component_1.ControlManualComponent,
        children: [
            {
                path: 'Actuadores',
                component: control_manual_actuadores_component_1.ControlManualActuadoresComponent,
            },
            {
                path: 'Horarios',
                component: control_manual_horarios_component_1.ControlManualHorariosComponent,
            },
        ],
    }];
var ControlManualRoutingModule = /** @class */ (function () {
    function ControlManualRoutingModule() {
    }
    ControlManualRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ControlManualRoutingModule);
    return ControlManualRoutingModule;
}());
exports.ControlManualRoutingModule = ControlManualRoutingModule;
exports.routedComponents = [
    control_manual_component_1.ControlManualComponent,
    control_manual_actuadores_component_1.ControlManualActuadoresComponent,
    control_manual_horarios_component_1.ControlManualHorariosComponent,
    status_card_component_1.StatusCardComponent,
    status_card_off_component_1.StatusCardOffComponent
];
//# sourceMappingURL=control_manual-routing.module.js.map