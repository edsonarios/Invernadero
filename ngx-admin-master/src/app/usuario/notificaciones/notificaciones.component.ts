import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
import { NotificationService } from '../../../service/notificaciones.service';
import { fundido } from '../../animation';
import { addSyntheticLeadingComment } from 'typescript';
@Component({
  selector: 'ngx-usuario-notificaciones',
  styleUrls: ['./notificaciones.component.scss'],
  templateUrl: './notificaciones.component.html',
  providers: [NotificationService],
  animations: [fundido]
})
export class NotificacionesComponent {
  public Controller;
  public notificationsE;
  public notificationsV;
  public url: string;

  constructor(
    private router: Router,
    private notiE: NotificationService,
    private notiV: NotificationService,
  ) {
      localStorage.setItem('route','notficaciones');
      this.url=GLOBAL.url;
      this.notiE.notificationError(localStorage.getItem('user_inv_id'),'fecha').subscribe(
        response => {
          this.notificationsE = response;
          console.log(this.notiE);
        },
        error => {

        }
      );

  }

}