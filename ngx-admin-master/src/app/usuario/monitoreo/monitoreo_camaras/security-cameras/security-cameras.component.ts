import { Component,DoCheck} from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements DoCheck{

  cameras: any[] = [{
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
  ngDoCheck(){
    this.      cameras= [{
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
  }
}
