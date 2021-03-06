import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../../service/user.service';
import { User } from '../../../../model/user';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { filter } from 'rxjs/operators/filter';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NotificationService} from '../../../../service/notificaciones.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
    providers: [UserService,NotificationService],
})
export class HeaderComponent implements OnInit {
  
 status=localStorage.getItem('role');

  @Input() position = 'normal';
  notifications = [];
public usuario: User;

  user: any;
  userMenu=[];

tag = 'my-context-menu';

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
            private userService: UserService,
              private analyticsService: AnalyticsService,
              private notiService: NotificationService,
              private router:Router) {


 if(localStorage.getItem('role')!=null){

   if (this.status=="user") {
      this.userMenu = [{ title: 'Mi Perfil' ,link: '/Usuario/Cuenta/Perfil'},{ title: 'Desconectarse',link: '/Principal/Login' }];
    }
    if(this.status=="admin"||this.status=="root"){
      this.userMenu = [{ title: 'Mi Perfil' ,link: '/Administrador/Cuentas/Perfil'},{ title: 'Gestionar',link: '/Administrador/Cuentas/Usuarios' },{ title: 'Desconectarse' ,link: '/Principal/Login' }];
    }
    if(this.status=="tester"){
      this.userMenu = [{ title: 'Desconectarse' ,link: '/Principal/Login' }];
    }
 }
 else{
  this.userMenu = [{ title: 'Mi Perfil'},{ title: 'Desconectarse',link: '/Principal/Login' }];
 }


 
  }

  ngOnInit() {

   this.usuario = new User(localStorage.getItem('user_id'),'','','','','','','','','','');
  this.userService.Notifications(this.usuario).subscribe(
      response =>{
        this.notifications=response;
        //console.log("estas son las notificaciones del usuario ID: "+localStorage.getItem('user_id'));
        //console.log(this.notifications);
      },
      error =>{
        
      }
    );
 
 // Agrega los nombres
       if (this.status==null) {
        this.user={ name: 'Nelson Richard Cori Sirpa', picture: 'assets/images/nick.jpg' };
       }
       else{
        this.user={ name: localStorage.getItem('nombre'), picture: 'assets/images/user_default.png' };
       }

       this.menuService.onItemClick().subscribe(( event ) => {
      this.onItemSelection(event.item.title);
    })

   }
  onItemSelection( title ) {
    /*if ( title === 'Log out' ) {
      // Do something on Log out
      console.log('Log out Clicked ')
    } else if ( title === 'Profile' ) {
      // Do something on Profile
      console.log('Profile Clicked ')
    }
    console.log("==================");
    console.log(title);
    console.log("==================");
    */
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  

  user_mail(){
  this.router.navigate(['/Usuario/Mensajes/Bandeja']);
  
  }
  admin_mail(){
    this.router.navigate(['/Administrador/Mensajes/Bandeja']);

  }
  
}
