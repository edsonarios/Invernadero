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
var io = require("socket.io-client");
var global_1 = require("../../../../service/global");
var router_1 = require("@angular/router");
var animation_1 = require("../../../animation");
var horario_service_1 = require("../../../../service/horario.service");
var controladores_service_1 = require("../../../../service/controladores.service");
var ControlManualHorariosComponent = /** @class */ (function () {
    function ControlManualHorariosComponent(horaService, router, ControlService) {
        var _this = this;
        this.horaService = horaService;
        this.router = router;
        this.ControlService = ControlService;
        localStorage.setItem('route', 'horarios');
        this.urlSocket = global_1.GLOBAL.urlSocket;
        // console.log("ESTE ES EL DATO ");
        this.socket = io(this.urlSocket);
        //console.log(this.socket);
        //obtiene los horarios por bomba
        this.horaService.mostrarHorarios(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.horario = response;
            //console.log(this.horario);
        }, function (error) {
        });
        //obtiene los datos de las bombas actuales
        this.horaService.obtenerBombas(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.bombas = response;
            //console.log(this.bombas);
        }, function (error) {
        });
        //obtiene los datos de los controladores
        this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            //console.log(this.Controller);
        }, function (error) {
        });
    }
    ControlManualHorariosComponent.prototype.eliminarHorario = function (id) {
        var _this = this;
        this.horaService.eliminarHorario(id).subscribe(function (response) {
            _this.horario = response;
            console.log(response);
        }, function (error) {
        });
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Usuario/Control/Horarios']);
        });
    };
    ControlManualHorariosComponent.prototype.addHour = function (elem, id, uuid) {
        var _this = this;
        var Hora = elem.target.elements[0].value;
        var Minuto = elem.target.elements[1].value;
        var duracion = elem.target.elements[2].value;
        if (Hora < 10) {
            Hora = '0' + Hora;
        }
        if (Minuto < 10) {
            Minuto = '0' + Minuto;
        }
        if (duracion < 10) {
            duracion = '0' + duracion;
        }
        var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"hora\":\"" + Hora + ":" + Minuto + ":00\",\"duracion\":\"00:" + duracion + ":00\",\"bomba\":\"" + id + "\"}";
        console.log(a);
        this.socket.emit('nuevoRiego', a);
        //this.inv.tiempoIntermitencia='00:'+min+':'+sec;
        this.horaService.adicionarNuevaHora(id, Hora + ':' + Minuto + ':00', '00:' + duracion + ':00').subscribe(function (response) {
            console.log(response);
        }, function (error) {
        });
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Usuario/Control/Horarios']);
        });
    };
    ControlManualHorariosComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-control-manual-horarios',
            styleUrls: ['./control_manual_horarios.component.scss'],
            templateUrl: './control_manual_horarios.component.html',
            providers: [horario_service_1.HorarioService, controladores_service_1.ControladorService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [horario_service_1.HorarioService,
            router_1.Router,
            controladores_service_1.ControladorService])
    ], ControlManualHorariosComponent);
    return ControlManualHorariosComponent;
}());
exports.ControlManualHorariosComponent = ControlManualHorariosComponent;
//# sourceMappingURL=control_manual_horarios.component.js.map