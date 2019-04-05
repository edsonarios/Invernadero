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
var demo_menu_1 = require("./demo-menu");
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.Invenaderos = new Array(6);
        this.menu = demo_menu_1.MENU_ITEMS;
        localStorage.setItem('page', 'producto');
    }
    DemoComponent.prototype.contenido = function (e) {
        if (e.target.innerHTML == 'producto' ||
            e.target.innerHTML == 'Sensores' ||
            e.target.innerHTML == 'Actuadores' ||
            e.target.innerHTML == 'Energia' ||
            e.target.innerHTML == 'Camaras de Seguridad' ||
            e.target.innerHTML == 'CMActuadores' ||
            e.target.innerHTML == 'Horarios de Riego' ||
            e.target.innerHTML == 'Reporte' ||
            e.target.innerHTML == 'Info Invernadero') {
            localStorage.setItem('page', e.target.innerHTML);
            this.ngAfterViewInit();
        }
    };
    DemoComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, 0);
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'ngx-pages',
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\" (click)=\"contenido($event)\"></nb-menu>\n      <router-outlet>\n<a href=\"#/principal/Inicio\"><input type=\"button\" class=\"btn btn-success btn-block\" value=\"Volver al inicio\" ></a><br>\n      <div class=\"col-md-6 offset-md-3\">\n       <span align=\"center\"><h6>Seleccione su Invernadero</h6></span>\n       <nb-card>\n        <nb-card-body>\n       <div class=\"btn-group\">\n       <div class=\"\" *ngFor=\"let n of Invenaderos; let i=index\">\n       \n        <button class=\"btn btn-outline-success btn-tn\" >\n        {{i+1}}\n        </button>\n\n        </div>\n       </div>\n       </nb-card-body>\n       </nb-card>\n       </div>\n\n\n      </router-outlet>\n    </ngx-one-column-layout>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map