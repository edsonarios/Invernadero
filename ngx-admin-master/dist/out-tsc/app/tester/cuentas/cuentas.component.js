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
var CuentasComponent = /** @class */ (function () {
    function CuentasComponent(router) {
        this.router = router;
        this.Usuarios = [
            { 'id': '1',
                'nombre': "Jorge Luis",
                'ap_paterno': 'Castro',
                'ap_materno': 'Acero',
                'correo': 'jorge@user',
                'status': 'false' },
            { 'id': '2',
                'nombre': "Nicolas",
                'ap_paterno': 'Condori',
                'ap_materno': 'Condori',
                'correo': 'nicolas@user',
                'status': 'true' },
            { 'id': '3',
                'nombre': "Nelson Richard",
                'ap_paterno': 'Cori',
                'ap_materno': 'Sirpa',
                'correo': 'richard@user',
                'status': 'false' },
            { 'id': '4',
                'nombre': "Henry",
                'ap_paterno': 'Miranda',
                'ap_materno': 'Choque',
                'correo': 'henry@user',
                'status': 'false' },
            { 'id': '5',
                'nombre': "Edson",
                'ap_paterno': 'Añawaya',
                'ap_materno': 'Rios',
                'correo': 'edson@user',
                'status': 'false' },
            { 'id': '6',
                'nombre': "Juan Carlos",
                'ap_paterno': 'Callisaya',
                'ap_materno': 'Huanca',
                'correo': 'juan@user',
                'status': 'false' },
        ];
    }
    CuentasComponent = __decorate([
        core_1.Component({
            selector: 'ngx-Tester-cuentas',
            styleUrls: ['./cuentas.component.scss'],
            templateUrl: './cuentas.component.html',
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CuentasComponent);
    return CuentasComponent;
}());
exports.CuentasComponent = CuentasComponent;
//# sourceMappingURL=cuentas.component.js.map