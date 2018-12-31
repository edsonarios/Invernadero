import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { fundido } from '../../../animation';

@Component({
  selector: 'ngx-admin-edit',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
     providers: [UserService],
   animations: [fundido]
})
export class EditUsuarioComponent {
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
  public role;
  

  constructor(private router:Router,
    private userService: UserService){
    
}
ngOnInit(){
this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','',localStorage.getItem('admin_user_correo'),localStorage.getItem('admin_user_password'),'');
console.log(this.user);
  //Obtenemos todo el valor de el usuario
  this.userService.SingUp(this.user).subscribe(
      response =>{
        this.identity=response;
        console.log(this.identity);

        this.nombre=this.identity.result['nombre'];
        this.ap_paterno=this.identity.result['ap_paterno'];
        this.ap_materno=this.identity.result['ap_materno'];
        this.direccion=this.identity.result['direccion'];
        this.telefono=this.identity.result['telefono'];
        this.correo=this.identity.result['correo'];
        this.password=this.identity.result['password'];
        this.role=this.identity.result['tipo'];
      },
      error =>{
        
      }
    )


}

editUser(e){

  e.preventDefault();
  var nombre =e.target.elements[0].value;
  var ap_paterno =e.target.elements[1].value;
  var ap_materno =e.target.elements[2].value;
  var direccion =e.target.elements[3].value;
  var telefono =e.target.elements[4].value;
  var correo =e.target.elements[5].value;
  var password =e.target.elements[6].value;
   
this.user = new User(localStorage.getItem('admin_user_id'),nombre,ap_paterno,ap_materno,'user',direccion,telefono,correo,password,'');

    this.userService.editarUser(this.user).subscribe(
      response =>{
        this.user = response.user;
      },
      error =>{
        console.log(<any>error)
      }
    );

     this.router.navigate(['/admin/details']);
     
  }
	volver(){
      this.router.navigate(['/admin/details']);
}


	
}
