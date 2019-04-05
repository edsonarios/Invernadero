import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class DispositivoService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	
	ObtenerDispositivos(){
		return this._http.get(this.url+'mostrarDispositivos').map(res=> res.json())
	}
	crearDispositivo(mod,marc,nroPD,nroPA,img){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'addDispositivo',{modelo:mod,marca:marc,nroDigitales:nroPD,nroAnalogicos:nroPA,imagenControlador:img}, {headers:headers})
		.map(res => res.json())
	}
	eliminar(id){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'eliminarDispositivo',{id:id}, {headers:headers})
		.map(res => res.json())
	}
	
	
}