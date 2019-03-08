import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios
// servicios y otros
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

import { fundido } from '../../animation';
 
@Component({
  selector: 'ngx-admin-profile',
  //styleUrls: ['./producto.component.scss'],
  templateUrl: './profile.component.html',
  providers: [UserService],
  animations: [fundido]

})
export class ProfileComponent implements OnInit {
	 public user: User;
  public identity;
 //datos de el usuario
  public nombre;
  public ap_paterno;
  public ap_materno;
  public direccion;
  public telefono;
  public correo;
  public password;

constructor(
		private router:Router,
		private userService: UserService
		){}

ngOnInit(){

 this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
console.log(this.user);
  //Obtenemos todo el valor de el usuario
  this.userService.detalleUsuario(this.user).subscribe(
      response =>{
        this.identity=response;
        console.log(this.identity);

        this.nombre=this.identity[0]['nombre'];
        this.ap_paterno=this.identity[0]['ap_paterno'];
        this.ap_materno=this.identity[0]['ap_materno'];
        this.direccion=this.identity[0]['direccion'];
        this.telefono=this.identity[0]['telefono'];
        this.correo=this.identity[0]['correo'];
        this.password=this.identity[0]['password'];
      },
      error =>{
        
      }
    );



}
volver(){
 
    this.router.navigate(['/admin/user']);
}
change(event){

  event.preventDefault();
  var nombre =event.target.elements[0].value;
  var ap_paterno =event.target.elements[1].value;
  var ap_materno =event.target.elements[2].value;
  var direccion =event.target.elements[3].value;
  var telefono =event.target.elements[4].value;
  var correo =event.target.elements[5].value;
  var password =event.target.elements[6].value;

  this.user = new User(localStorage.getItem('user_id'),nombre,ap_paterno,ap_materno,localStorage.getItem('role'),direccion,telefono,correo,password,'');

    this.userService.editarUser(this.user).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(<any>error)
      }
    );
alert("Se ha guardado Correctamente");
 this.router.navigate(['/admin/user']);
}
	



}
