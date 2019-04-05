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
//import Servicios
var controladores_service_1 = require("../../../../service/controladores.service");
var dispositivos_service_1 = require("../../../../service/dispositivos.service");
var animation_1 = require("../../../animation");
var ComponentesAgregarControladorComponent = /** @class */ (function () {
    function ComponentesAgregarControladorComponent(ControlService, dispositiveService, router) {
        var _this = this;
        this.ControlService = ControlService;
        this.dispositiveService = dispositiveService;
        this.router = router;
        this.dispositiveService.ObtenerDispositivos().subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
            console.log(error);
        });
    }
    ComponentesAgregarControladorComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarControladorComponent.prototype.addControlador = function (ModeloC, MarcaC, NroDig, NroAn) {
        this.ControlService.AgregaControlador(localStorage.getItem('admin_user_id'), localStorage.getItem('admin_user_inv_id'), MarcaC, ModeloC, NroDig, NroAn).subscribe(function (response) {
            console.log(response);
        }, function (error) {
        });
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarControladorComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-componentes-agregar-controlador',
            styleUrls: ['./componentes_agregar_controlador.component.scss'],
            templateUrl: './componentes_agregar_controlador.component.html',
            providers: [controladores_service_1.ControladorService, dispositivos_service_1.DispositivoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [controladores_service_1.ControladorService,
            dispositivos_service_1.DispositivoService,
            router_1.Router])
    ], ComponentesAgregarControladorComponent);
    return ComponentesAgregarControladorComponent;
}());
exports.ComponentesAgregarControladorComponent = ComponentesAgregarControladorComponent;
//# sourceMappingURL=componentes_agregar_controlador.component.js.map