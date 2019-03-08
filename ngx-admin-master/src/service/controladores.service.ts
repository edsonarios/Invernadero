import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ControladorService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	AgregaControlador(uID,idInv,MarC,ModC,NDig,NAn){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'addControlador',{usuarioId:uID,invernaderoId:idInv,marcaC:MarC,modeloC:ModC,pinesDigitales:NDig,pinesAnalogicos:NAn}, {headers:headers})
		.map(res => res.json())
	}
	showControlador(idInv){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarControladores',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json())
	}
	ObtenerControladorUsuario(idInv){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'uObtenerControladores',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json())
	}

	ObtenerControladores(idInv){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarControladores',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json())
	}
	actuadorEstado(uuid){
		return this._http.get(this.url+'actuador/'+uuid) 
		.map(res => res.json())
	}
	deleteController(idC){
	let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'eliminarControlador',{id:idC}, {headers:headers})
		.map(res => res.json())
	}
	
}