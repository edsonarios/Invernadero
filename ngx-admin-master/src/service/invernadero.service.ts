import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class InvernaderoService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	Añadir(invernadero){
		let params = JSON.stringify(invernadero);
		let headers= new Headers({'Content-Type':'application/json'});
		
		return this._http.post(this.url+'invernadero',params, {headers:headers})
		.map(res => res.json())
	}
	show(invernadero){
		let params = JSON.stringify(invernadero);
		let headers= new Headers({'Content-Type':'application/json'});
		
		return this._http.post(this.url+'obtenerInv',params, {headers:headers})
		.map(res => res.json())
	}
	editarInvernadero(invernadero){
	let params = JSON.stringify(invernadero);
		let headers= new Headers({'Content-Type':'application/json'});
		
		return this._http.post(this.url+'updateInvernadero',params, {headers:headers})
		.map(res => res.json())
	}
	deleteInvernaderio(idInv){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'eliminarInvernadero',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json())

	}
}