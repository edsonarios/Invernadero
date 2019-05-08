import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importar servicio, 
import { User } from '../../../../model/user';
import { UserService } from '../../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-cuentas-agregar',
  styleUrls: ['./cuentas_agregar.component.scss'],
  templateUrl: './cuentas_agregar.component.html',
  providers: [UserService],
  animations: [fundido]
 
})
export class CuentasAgregarComponent implements OnInit{
public role =localStorage.getItem('role');
public user: User;



  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

constructor(private router:Router,
		private userService: UserService,
		private fb: FormBuilder){	
	if (localStorage.getItem('role')=='root') {
			this.user = new User('','','','','','','','','','false','true');
		}
		else{
			this.user = new User('','','','','user','','','','','false','true');
		}
}
  ngOnInit() {
    this.firstForm = this.fb.group({
      NombreCtrl: ['', Validators.required],
      ApPatCtrl: ['', Validators.required],
      ApMatCtrl: ['', Validators.required],
      DirecCtrl: ['', Validators.required],
      TelCtrl: ['', Validators.required],
      CorreoCtrl: ['', [Validators.required, Validators.email]],
    });

    this.secondForm = this.fb.group({
     // secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      PassCtrl:['', Validators.required],
    });
  } 
  prueba(){
    console.log(this.user);
  }
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
AgregaCuenta(){
console.log(this.user);
    
    this.userService.register(this.user).subscribe(
      response =>{
        this.user = response.user;
      },
      error =>{
        console.log(<any>error)
      }
    );
    
}

  SelectAdmin(){
    this.user.tipo='admin';
  }
  SelectTester(){
this.user.tipo='tester';
  }
  SelectUser(){
this.user.tipo='user';
  }
	volver(){
      this.router.navigate(['/Administrador/Cuentas/Usuarios']);
}

}
