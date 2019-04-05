"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SecurityCamerasComponent = /** @class */ (function () {
    function SecurityCamerasComponent() {
        this.cameras = [{
                title: 'Camara #1',
                source: 'http://166.130.176.92/mjpg/video.mjpg?COUNTER',
            }, {
                title: 'Camara #2',
                source: 'http://50.26.112.95:8090/videostream.cgi?user=admin&pwd=',
            }, {
                title: 'Camara #3',
                source: 'http://192.168.0.108/jpg/image.jpg/snapshot',
            }, {
                title: 'Camara #4',
                source: 'http://173.29.173.103:81/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=no_limit',
            }];
        this.selectedCamera = this.cameras[0];
        this.userMenu = [{
                title: 'Profile',
            }, {
                title: 'Log out',
            }];
        this.isSingleView = false;
    }
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    SecurityCamerasComponent.prototype.ngDoCheck = function () {
        this.cameras = [{
                title: 'Camara #1',
                source: 'http://166.130.176.92/mjpg/video.mjpg?COUNTER',
            }, {
                title: 'Camara #2',
                source: 'http://50.26.112.95:8090/videostream.cgi?user=admin&pwd=',
            }, {
                title: 'Camara #3',
                source: 'http://192.168.0.108/jpg/image.jpg/snapshot',
            }, {
                title: 'Camara #4',
                source: 'http://173.29.173.103:81/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=no_limit',
            }];
    };
    SecurityCamerasComponent = __decorate([
        core_1.Component({
            selector: 'ngx-security-cameras',
            styleUrls: ['./security-cameras.component.scss'],
            templateUrl: './security-cameras.component.html',
        })
    ], SecurityCamerasComponent);
    return SecurityCamerasComponent;
}());
exports.SecurityCamerasComponent = SecurityCamerasComponent;
//# sourceMappingURL=security-cameras.component.js.map