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
var router_1 = require("@angular/router");
var animation_1 = require("../../animation");
var ControlManualComponent = /** @class */ (function () {
    function ControlManualComponent(router) {
        this.router = router;
        this.TempMax = 30;
        this.TempMedia = 20;
        this.TempMin = 10;
        this.Bomba_Agua = [{}];
        this.Ventanas = [{}];
        this.Ventiladores = [{}];
        this.Puertas = [{}];
    }
    ControlManualComponent.prototype.BtnCtrlTemp = function (btn, acction) {
        if (btn == 'Max') {
            if (acction == "Up") {
                this.TempMax = this.TempMax + 1;
            }
            else {
                if (this.TempMax > this.TempMedia + 1) {
                    this.TempMax = this.TempMax - 1;
                }
            }
        }
        if (btn == 'Media') {
            if (acction == "Up") {
                if (this.TempMedia < this.TempMax - 1) {
                    this.TempMedia = this.TempMedia + 1;
                }
            }
            else {
                if (this.TempMedia > this.TempMin + 1) {
                    this.TempMedia = this.TempMedia - 1;
                }
            }
        }
        if (btn == 'Min') {
            if (acction == "Up") {
                if (this.TempMin < this.TempMedia - 1) {
                    this.TempMin = this.TempMin + 1;
                }
            }
            else {
                this.TempMin = this.TempMin - 1;
            }
        }
    };
    ControlManualComponent = __decorate([
        core_1.Component({
            selector: 'ngx-Tester-control_manual',
            styleUrls: ['./control_manual.component.scss'],
            templateUrl: './control_manual.component.html',
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ControlManualComponent);
    return ControlManualComponent;
}());
exports.ControlManualComponent = ControlManualComponent;
//# sourceMappingURL=control_manual.component.js.map