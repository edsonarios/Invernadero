import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService{
	public url: string;
	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	notificationError(idNe,feNe){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesError',{id:idNe, fecha:feNe}, {headers:headers}) 
		.map(res => res.json())
    }
    
	notificationGood(idNg,feNg){
	    let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getNotificacionesFuncionamiento',{id:idNg, fecha:feNg}, {headers:headers})
		.map(res => res.json())
	}
	
	
} 