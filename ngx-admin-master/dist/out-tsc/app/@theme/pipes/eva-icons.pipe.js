"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var eva_icons_1 = require("eva-icons");
var EvaIconsPipe = /** @class */ (function () {
    function EvaIconsPipe(sanitizer) {
        this.sanitizer = sanitizer;
        this.defaultOptions = {
            height: 24,
            width: 24,
            fill: 'inherit',
            animationHover: true,
            animationInfinity: false,
        };
    }
    EvaIconsPipe.prototype.transform = function (icon, options) {
        var mergedOptions = __assign({}, this.defaultOptions, options);
        var width = mergedOptions.width, height = mergedOptions.height, fill = mergedOptions.fill, animationType = mergedOptions.animationType, animationHover = mergedOptions.animationHover, animationInfinity = mergedOptions.animationInfinity;
        var animation = animationType ?
            { type: animationType, hover: animationHover, infinite: animationInfinity } :
            null;
        return this.sanitizer.bypassSecurityTrustHtml(eva_icons_1.icons[icon].toSvg({
            width: width,
            height: height,
            fill: fill,
            animation: animation,
        }));
    };
    EvaIconsPipe = __decorate([
        core_1.Pipe({ name: 'eva' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], EvaIconsPipe);
    return EvaIconsPipe;
}());
exports.EvaIconsPipe = EvaIconsPipe;
//# sourceMappingURL=eva-icons.pipe.js.map