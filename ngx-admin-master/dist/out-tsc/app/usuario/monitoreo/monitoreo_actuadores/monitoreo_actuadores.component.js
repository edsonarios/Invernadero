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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var controladores_service_1 = require("../../../../service/controladores.service");
var sensores_service_1 = require("../../../../service/sensores.service");
var pines_service_1 = require("../../../../service/pines.service");
var animation_1 = require("../../../animation");
var io = require("socket.io-client");
var global_1 = require("../../../../service/global");
var MonitoreoActuadoresComponent = /** @class */ (function () {
    function MonitoreoActuadoresComponent(ControlService, _sensorService, pinService) {
        this.ControlService = ControlService;
        this._sensorService = _sensorService;
        this.pinService = pinService;
        localStorage.setItem('route', 'Mactuadores');
        this.socket = io(global_1.GLOBAL.urlSocket);
    }
    MonitoreoActuadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
        this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
        });
        //RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
        this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Devices = response;
            //      console.log(this.Devices);       
        }, function (error) {
            console.log(error);
        });
    };
    MonitoreoActuadoresComponent.prototype.ngAfterViewInit = function () {
        //estado de los botones en tiempo real
        this.startRealtime();
    };
    MonitoreoActuadoresComponent.prototype.startRealtime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.on('EsActuador', function (payload) {
                    // console.log("pasoo 1")
                    // console.log(payload)
                    //se actualiza segun actuador y update de mqtt para mostrar el estado de los botones en tiempo real
                    //this.variable++
                    _this.funcionMostrarPinesActuadores();
                });
                return [2 /*return*/];
            });
        });
    };
    MonitoreoActuadoresComponent.prototype.funcionMostrarPinesActuadores = function () {
        var _this = this;
        this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Devices = response;
            //console.log(this.Devices);       
        }, function (error) {
            console.log(error);
        });
    };
    MonitoreoActuadoresComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-monitoreo-actuadores',
            styleUrls: ['./monitoreo_actuadores.component.scss'],
            templateUrl: './monitoreo_actuadores.component.html',
            providers: [controladores_service_1.ControladorService, sensores_service_1.SensorService, pines_service_1.PinesService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [controladores_service_1.ControladorService,
            sensores_service_1.SensorService,
            pines_service_1.PinesService])
    ], MonitoreoActuadoresComponent);
    return MonitoreoActuadoresComponent;
}());
exports.MonitoreoActuadoresComponent = MonitoreoActuadoresComponent;
//# sourceMappingURL=monitoreo_actuadores.component.js.map