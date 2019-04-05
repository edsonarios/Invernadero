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
//importar servicios 
var dispositivos_service_1 = require("../../../../service/dispositivos.service");
var animation_1 = require("../../../animation");
var ControladoresAgregarComponent = /** @class */ (function () {
    function ControladoresAgregarComponent(router, dispositiveService) {
        this.router = router;
        this.dispositiveService = dispositiveService;
    }
    ControladoresAgregarComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Controladores/Catalogo']);
    };
    ControladoresAgregarComponent.prototype.addControlador = function (e) {
        e.preventDefault();
        var modelo = e.target.elements[0].value;
        var marca = e.target.elements[1].value;
        var nroPD = e.target.elements[2].value;
        var nroPA = e.target.elements[3].value;
        console.log(modelo);
        console.log(marca);
        console.log(nroPD);
        console.log(nroPA);
        this.dispositiveService.crearDispositivo(modelo, marca, nroPD, nroPA).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/Administrador/Controladores/Catalogo']);
    };
    ControladoresAgregarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-controladores-agregar',
            styleUrls: ['./controladores_agregar.component.scss'],
            templateUrl: './controladores_agregar.component.html',
            providers: [dispositivos_service_1.DispositivoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            dispositivos_service_1.DispositivoService])
    ], ControladoresAgregarComponent);
    return ControladoresAgregarComponent;
}());
exports.ControladoresAgregarComponent = ControladoresAgregarComponent;
//# sourceMappingURL=controladores_agregar.component.js.map