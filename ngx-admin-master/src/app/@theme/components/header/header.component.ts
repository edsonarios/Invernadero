import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { LoginComponent } from '../../../main/login/login.component'
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers:[UserService]
})
export class HeaderComponent{

 public user: User;
   public identity;
  
  @Input() position = 'normal';


  username;
  lastname;
  
  status=localStorage.getItem('status');
  role=localStorage.getItem('role');
  id=localStorage.getItem('admin_user_id');


constructor(
   private userService: UserService,
    private sidebarService: NbSidebarService,
    private router:Router,
    
    ){

    if (localStorage.getItem('status')=='enable') {
     this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');

  //Obtenemos todo el valor de el usuario
  this.userService.detalleUsuario(this.user).subscribe(
      response =>{
        this.identity=response;
        
        this.username=this.identity[0]['nombre'];
        this.lastname=this.identity[0]['ap_paterno']

      },
      error =>{
        
      }
    );
    }
    else{
      this.username='';
      this.lastname='';
    }



  }


	LogOut(){

		console.log('SALIR');
		this.router.navigate(['/main/login']);
		localStorage.clear();
		this.status=null;
		this.role=null;
		}	
 profile(){
  this.router.navigate(['/pages/profile']);
}
profileAdmin(){
  this.router.navigate(['/admin/profile']);

}
 Administrar(){
   localStorage.removeItem('user_inv_id');
   localStorage.removeItem('admin_user_correo');
   localStorage.removeItem('admin_user_id');
   localStorage.removeItem('admin_user_password');
   localStorage.removeItem('route');
  this.router.navigate(['/admin/user']);
 }
 Productos(){
  this.router.navigate(['/admin/product']);
  localStorage.removeItem('user_inv_id');
   localStorage.removeItem('admin_user_correo');
   localStorage.removeItem('admin_user_id');
   localStorage.removeItem('admin_user_password');
 }
 Controladores(){
   this.router.navigate(['/admin/controlador']);
 }
 
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

}
