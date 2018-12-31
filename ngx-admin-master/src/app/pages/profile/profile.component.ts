import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
// servicios y otros
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

import { fundido } from '../../animation';


@Component({
  selector: 'ngx-User_Profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
  providers: [UserService],
  animations: [fundido]
})
export class ProfileComponent implements OnInit{
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
		){		
		
	}
ngOnInit(){

if (localStorage.getItem('user_inv_id')!=null) {
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
else{
  console.log('Usted no tiene Invernadero');
}


}
volver(){
 
    this.router.navigate(['/pages/producto']);
}
change(){
  this.router.navigate(['/pages/adjust']);
}
	

	
	

}
