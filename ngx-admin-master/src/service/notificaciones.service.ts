import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DatosNoti } from '../model/datosNoti';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class NotificationService{
	public url: string;

	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	notificationError(id,fecha){
		console.log(id, fecha);
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesError',{id,fecha}, {headers:headers}) 
		.map(res => res.json())
	}

	notificationFunci(id,fecha){
		console.log(id, fecha);
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesFuncionamiento',{id,fecha}, {headers:headers}) 
		.map(res => res.json())
	}
		
/*
	notificationError(datosNoti: DatosNoti){
		console.log(datosNoti);
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesError',datosNoti, {headers:headers}) 
		.map(res => res.json())
    }

	notificationError(idNe,feNe){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesError',{id:idNe, fecha:feNe}, {headers:headers}) 
		.map(res => res.json())
    }
  */  
	notificationGood(idNg,feNg){
	    let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesFuncionamiento',{id:idNg, fecha:feNg}, {headers:headers})
		.map(res => res.json())
	}
	
	
} 