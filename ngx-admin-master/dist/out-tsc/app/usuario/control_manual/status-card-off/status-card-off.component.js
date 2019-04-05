"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatusCardOffComponent = /** @class */ (function () {
    function StatusCardOffComponent() {
        this.on = false;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StatusCardOffComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StatusCardOffComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StatusCardOffComponent.prototype, "on", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StatusCardOffComponent.prototype, "Flujo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StatusCardOffComponent.prototype, "Tipo", void 0);
    StatusCardOffComponent = __decorate([
        core_1.Component({
            selector: 'ngx-status-card-off',
            styleUrls: ['./status-card-off.component.scss'],
            template: "\n  \n    <nb-card (click)=\"on = !on\" [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ on ? 'ENCENDIDO' : 'APAGADO' }}</div>\n        <span class=\"text-success\" *ngIf=\"Tipo=='Bomba'&&Flujo=='true'\">Existe Flujo de Agua</span>\n        <span class=\"text-danger\" *ngIf=\"Tipo=='Bomba'&&Flujo=='false'\">No Existe Flujo de Agua</span>\n      </div>\n    </nb-card>\n  ",
        })
    ], StatusCardOffComponent);
    return StatusCardOffComponent;
}());
exports.StatusCardOffComponent = StatusCardOffComponent;
//# sourceMappingURL=status-card-off.component.js.map