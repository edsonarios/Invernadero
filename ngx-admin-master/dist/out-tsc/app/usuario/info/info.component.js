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
var invernadero_service_1 = require("../../../service/invernadero.service");
var invernadero_1 = require("../../../model/invernadero");
var animation_1 = require("../../animation");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(invService, router) {
        var _this = this;
        this.invService = invService;
        this.router = router;
        localStorage.setItem('route', 'info');
        //RECOGE TODOS LOS DATOS VINCULADOS A ESTE INVERNADERO
        this.inv = new invernadero_1.Invernadero(localStorage.getItem('user_inv_id'), '', '', '', '', '', '', '', '', '', '');
        this.invService.show(this.inv).subscribe(function (response) {
            _this.details = response;
            //console.log(this.details);
            _this.departamento = _this.details[0]['departamento'];
            _this.ubicacion = _this.details[0]['ubicacion'];
            _this.provincia = _this.details[0]['provincia'];
            _this.tempMax = _this.details[0]['tempMaxima'];
            _this.tempMin = _this.details[0]['tempMinima'];
            _this.tempMedia = _this.details[0]['tempMedia'];
            _this.timeIntermitencia = _this.details[0]['tiempoIntermitencia'];
            _this.minuto = _this.timeIntermitencia.substring(3, 5);
            _this.segundo = _this.timeIntermitencia.substring(6, 8);
        }, function (error) {
            console.log(error);
        });
    }
    InfoComponent.prototype.CambiarDatos = function (e) {
        var _this = this;
        e.preventDefault();
        var departamento = e.target.elements[0].value;
        var ubicacion = e.target.elements[2].value;
        var provincia = e.target.elements[1].value;
        var tempMax = e.target.elements[3].value;
        var tempMin = e.target.elements[5].value;
        var tempMedia = e.target.elements[4].value;
        var min = e.target.elements[6].value;
        var sec = e.target.elements[7].value;
        //console.log('la dimension de el minuto');
        //console.log(min.length);
        if (min.length < 2) {
            if (min < 10) {
                min = '0' + min;
            }
        }
        if (sec.length < 2) {
            if (sec < 10) {
                sec = '0' + sec;
            }
        }
        this.tiempoIntermitencia = '00:' + min + ':' + sec;
        this.inv = new invernadero_1.Invernadero(localStorage.getItem('admin_user_inv_id'), departamento, ubicacion, provincia, tempMax, tempMin, tempMedia, this.tiempoIntermitencia, localStorage.getItem('admin_user_id'), '', '');
        // console.log(this.inv);
        this.invService.editarInvernadero(this.inv).subscribe(function (response) {
            //console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Usuario/Info']);
        });
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-info',
            styleUrls: ['./info.component.scss'],
            templateUrl: './info.component.html',
            providers: [invernadero_service_1.InvernaderoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [invernadero_service_1.InvernaderoService,
            router_1.Router])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map