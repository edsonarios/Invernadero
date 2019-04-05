import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Tester-cuentas',
  styleUrls: ['./cuentas.component.scss'],
  templateUrl: './cuentas.component.html',
 animations: [fundido]
})
export class CuentasComponent {

	Usuarios=[
	{'id':'1',
	'nombre':"Jorge Luis",
	'ap_paterno':'Castro',
	'ap_materno':'Acero',
	'correo':'jorge@user',
	'status':'false'},
	{'id':'2',
	'nombre':"Nicolas",
	'ap_paterno':'Condori',
	'ap_materno':'Condori',
	'correo':'nicolas@user',
	'status':'true'},
	{'id':'3',
	'nombre':"Nelson Richard",
	'ap_paterno':'Cori',
	'ap_materno':'Sirpa',
	'correo':'richard@user',
	'status':'false'},
	{'id':'4',
	'nombre':"Henry",
	'ap_paterno':'Miranda',
	'ap_materno':'Choque',
	'correo':'henry@user',
	'status':'false'},
	{'id':'5',
	'nombre':"Edson",
	'ap_paterno':'Añawaya',
	'ap_materno':'Rios',
	'correo':'edson@user',
	'status':'false'},
	{'id':'6',
	'nombre':"Juan Carlos",
	'ap_paterno':'Callisaya',
	'ap_materno':'Huanca',
	'correo':'juan@user',
	'status':'false'},
	];
	
constructor(
		private router:Router,

		){

	
}
		
}