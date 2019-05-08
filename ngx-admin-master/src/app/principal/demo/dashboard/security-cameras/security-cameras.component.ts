import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Camara 1',
    source: 'assets/images/camera1.jpg',
  }, {
    title: 'Camara 2',
    source: 'assets/images/camera2.jpg',
  }, {
    title: 'Camara 3',
    source: 'assets/images/camera3.jpg',
  }, {
    title: 'Camara 4',
    source: 'assets/images/camera4.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
