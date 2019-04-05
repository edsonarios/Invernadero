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
var io = require("socket.io-client");
var global_1 = require("../../../../../service/global");
var points = [50];
var TrafficChartComponent = /** @class */ (function () {
    function TrafficChartComponent(theme) {
        this.theme = theme;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
        this.urlSocket = global_1.GLOBAL.urlSocket;
        this.socket = io(this.urlSocket);
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        this.actualiza();
        this.startRealtime();
    };
    TrafficChartComponent.prototype.startRealtime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.on('arduino', function (payload) {
                    //console.log(payload)
                    points.push(parseFloat(payload.bateria));
                    // // Remove first element if length > 10
                    var length = points.length;
                    if (length >= 10) {
                        points.shift();
                    }
                    _this.actualiza();
                    //console.log(this.data)
                });
                return [2 /*return*/];
            });
        });
    };
    TrafficChartComponent.prototype.actualiza = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.themeSubscription = this.theme.getJsTheme().pipe(operators_1.delay(1)).subscribe(function (config) {
                    var trafficTheme = config.variables.traffic;
                    _this.option = Object.assign({}, {
                        grid: {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: points,
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
                                    color: trafficTheme.colorBlack,
                                    opacity: 0.06,
                                    width: '1',
                                },
                            },
                        },
                        tooltip: {
                            axisPointer: {
                                type: 'shadow',
                            },
                            textStyle: {
                                color: trafficTheme.tooltipTextColor,
                                fontWeight: trafficTheme.tooltipFontWeight,
                                fontSize: 16,
                            },
                            position: 'middle',
                            backgroundColor: trafficTheme.tooltipBg,
                            borderColor: trafficTheme.tooltipBorderColor,
                            borderWidth: 3,
                            // AQUI SE ASIGNA EL VALOR Y LAS UNIDADES COMO SE VERAN
                            // EJEMPLO
                            //formatter: '{c0} %<br>HH:MM:SS',
                            formatter: '{c0} %',
                            extraCssText: trafficTheme.tooltipExtraCss,
                        },
                        series: [
                            {
                                type: 'line',
                                symbol: 'circle',
                                symbolSize: 8,
                                sampling: 'average',
                                silent: true,
                                itemStyle: {
                                    normal: {
                                        color: trafficTheme.shadowLineDarkBg,
                                    },
                                    emphasis: {
                                        color: 'rgba(0,0,0,0)',
                                        borderColor: 'rgba(0,0,0,0)',
                                        borderWidth: 0,
                                    },
                                },
                                lineStyle: {
                                    normal: {
                                        width: 2,
                                        color: trafficTheme.shadowLineDarkBg,
                                    },
                                },
                                data: points.map(function (p) { return p - 15; }),
                            },
                            {
                                type: 'line',
                                symbol: 'circle',
                                symbolSize: 6,
                                sampling: 'average',
                                itemStyle: {
                                    normal: {
                                        color: trafficTheme.itemColor,
                                        borderColor: trafficTheme.itemBorderColor,
                                        borderWidth: 2,
                                    },
                                    emphasis: {
                                        color: 'white',
                                        borderColor: trafficTheme.itemEmphasisBorderColor,
                                        borderWidth: 2,
                                    },
                                },
                                lineStyle: {
                                    normal: {
                                        width: 2,
                                        color: trafficTheme.lineBg,
                                        shadowColor: trafficTheme.lineBg,
                                        shadowBlur: trafficTheme.lineShadowBlur,
                                    },
                                },
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: trafficTheme.gradFrom,
                                            }, {
                                                offset: 1,
                                                color: trafficTheme.gradTo,
                                            }]),
                                        opacity: 1,
                                    },
                                },
                                data: points,
                            },
                        ],
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficChartComponent = __decorate([
        core_1.Component({
            selector: 'ngx-traffic-chart',
            styleUrls: ['./traffic.component.scss'],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TrafficChartComponent);
    return TrafficChartComponent;
}());
exports.TrafficChartComponent = TrafficChartComponent;
//# sourceMappingURL=traffic-chart.component.js.map