import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	register(user_to_register){
		
		
		let params = JSON.stringify(user_to_register);
		let headers= new Headers({'Content-Type':'application/json'});

		
		return this._http.post(this.url+'usuario',params, {headers:headers})
		.map(res => res.json())
	}
	SingUp(user){
		let params = JSON.stringify(user);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'login',params, {headers:headers})
		.map(res => res.json())
	}
	ShowInvernaderos(iduser){
		let params = JSON.stringify(iduser);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'obtenerInvernaderos',params, {headers:headers})
		.map(res => res.json())
	}
	obtenerUsuarios(){
		return this._http.get(this.url+'obtenerUsuarios').map(res=> res.json())
	}


	obtenerAdmins(){
		return this._http.get(this.url+'obtenerAdmins').map(res=> res.json())
	}
	obtenerTesters(){
		return this._http.get(this.url+'obtenerTester').map(res=> res.json())
	}
	Notifications(user){
		let params = JSON.stringify(user);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'getNotificaciones',params, {headers:headers})
		.map(res => res.json())
		
	}

	detalleUsuario(iduser){
		let params = JSON.stringify(iduser);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'obtenerUser',params, {headers:headers})
		.map(res => res.json())
	}
	cambiarPassword(user){
		let params = JSON.stringify(user);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'updateUsuarioPassword',params, {headers:headers})
		.map(res => res.json())
	}
	editarUser(user){
	let params = JSON.stringify(user);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'updateUsuario',params, {headers:headers})
		.map(res => res.json())
	}
	deleteUser(idUser){
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'eliminarUsuario',{id:idUser}, {headers:headers})
		.map(res => res.json())

	}
	
}