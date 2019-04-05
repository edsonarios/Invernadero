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
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var global_1 = require("../../../../../../service/global");
var sensores_service_1 = require("../../../../../../service/sensores.service");
require("rxjs/add/operator/map");
var io = require("socket.io-client");
var ElectricityChartComponent = /** @class */ (function () {
    function ElectricityChartComponent(theme, _sensorService) {
        this.theme = theme;
        this._sensorService = _sensorService;
        this.labels = [];
        this.datosM = [];
        this.urlSocket = global_1.GLOBAL.urlSocket;
        this.socket = io(this.urlSocket);
    }
    ElectricityChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var valor = [];
        var fecha = [];
        this._sensorService.sensor(this.type, this.uuid).subscribe(function (response) {
            //this.datos = response
            if (Array.isArray(response)) {
                response.forEach(function (m) {
                    valor.push(parseInt(m.value));
                    var hora = parseInt(m.createdAt.substring(11, 13));
                    if (hora == 0 || hora == 1 || hora == 2 || hora == 3) {
                        hora = +21;
                    }
                    else {
                        hora = -4;
                    }
                    fecha.push(hora + "" + m.createdAt.substring(13, 16));
                });
            }
            valor.reverse();
            _this.data = valor.map(function (p, index) { return ({
                //deberia ser valor fecha
                label: fecha[index],
                //valor de la metrica
                value: p,
            }); });
        }, function (error) {
            console.log(error);
        });
    };
    ElectricityChartComponent.prototype.startRealtime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.on('agent/message', function (payload) {
                    //console.log(payload)
                    var metric = payload.metrics.find(function (m) { return m.type === _this.type; });
                    //sacamos la hora del sistema para la grafica
                    var hora = new Date();
                    // Copy current values
                    _this.labels = _this.data.map(function (i) { return i.label; });
                    _this.datosM = _this.data.map(function (i) { return i.value; });
                    // Remove first element if length > 20
                    var length = _this.labels.length || _this.datosM.length;
                    if (length >= 10) {
                        _this.labels.shift();
                        _this.datosM.shift();
                    }
                    //insertamos los nuevos datos
                    _this.labels.push(hora.getHours() + ":" + hora.getMinutes());
                    _this.datosM.push(metric.value);
                    _this.data = _this.datosM.map(function (p, index) { return ({
                        //deberia ser valor fecha
                        label: _this.labels[index],
                        //valor de la metrica
                        value: p,
                    }); });
                    _this.actualiza();
                });
                return [2 /*return*/];
            });
        });
    };
    ElectricityChartComponent.prototype.ngAfterViewInit = function () {
        this.actualiza();
        this.startRealtime();
    };
    ElectricityChartComponent.prototype.actualiza = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().pipe(operators_1.delay(1)).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} ºC',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: eTheme.xAxisTextColor,
                        fontSize: 18,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    ElectricityChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElectricityChartComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElectricityChartComponent.prototype, "uuid", void 0);
    ElectricityChartComponent = __decorate([
        core_1.Component({
            selector: 'ngx-electricity-chart',
            styleUrls: ['./electricity-chart.component.scss'],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
            providers: [sensores_service_1.SensorService],
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService,
            sensores_service_1.SensorService])
    ], ElectricityChartComponent);
    return ElectricityChartComponent;
}());
exports.ElectricityChartComponent = ElectricityChartComponent;
//# sourceMappingURL=electricity-chart.component.js.map