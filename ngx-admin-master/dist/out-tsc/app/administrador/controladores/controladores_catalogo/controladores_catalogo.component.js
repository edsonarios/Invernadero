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
//importando los servicios
var dispositivos_service_1 = require("../../../../service/dispositivos.service");
var animation_1 = require("../../../animation");
var ControladoresCatalogoComponent = /** @class */ (function () {
    function ControladoresCatalogoComponent(router, dispositiveService) {
        var _this = this;
        this.router = router;
        this.dispositiveService = dispositiveService;
        this.dispositiveService.ObtenerDispositivos().subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
            console.log(error);
        });
    }
    ControladoresCatalogoComponent.prototype.agregar = function () {
        this.router.navigate(['/Administrador/Controladores/Agregar']);
    };
    ControladoresCatalogoComponent.prototype.Eliminar = function (id) {
        var _this = this;
        this.dispositiveService.eliminar(id).subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
            console.log(error);
        });
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Controladores/Catalogo']);
        });
    };
    ControladoresCatalogoComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-controladores-catalogo',
            styleUrls: ['./controladores_catalogo.component.scss'],
            templateUrl: './controladores_catalogo.component.html',
            providers: [dispositivos_service_1.DispositivoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            dispositivos_service_1.DispositivoService])
    ], ControladoresCatalogoComponent);
    return ControladoresCatalogoComponent;
}());
exports.ControladoresCatalogoComponent = ControladoresCatalogoComponent;
//# sourceMappingURL=controladores_catalogo.component.js.map