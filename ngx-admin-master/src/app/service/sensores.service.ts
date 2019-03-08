import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class SensorService{
	public url: string;
	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	sensor(type,uuid){
		
		return this._http.get(this.url+'metrics/'+uuid+'/'+type) 
		.map(res => res.json())
	}
	metricsUuid(uuid){

		return this._http.get(this.url+'metrics/'+uuid) 
		.map(res => res.json())
	}
	
}