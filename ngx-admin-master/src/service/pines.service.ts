import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class PinesService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	ShowDevices(idInv){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarTodosPines',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json());
	}
	ShowDevicesController(idController){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarTodosPinesControlador',{controladorId:idController}, {headers:headers})
		.map(res => res.json());
	}
	Activate(idController,NroP,DescP,dep,sensID,Mod,Mar,classP,Tmotor){

		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'activarPin',{controladorId:idController,nroPin:NroP,descripcionPin:DescP,depende:dep,sensorId:sensID,modelo:Mod,marca:Mar,clasePin:classP,tiempoMotor:Tmotor}, {headers:headers})
		.map(res => res.json());
	}
	desactivarpin(idpin,ControllerId,descpin){

		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'desactivarPin',{id:idpin,descripcionPin:descpin,controladorId:ControllerId}, {headers:headers})
		.map(res => res.json());
	}
	muestraSensores(idController){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarTodosPinesControladorAnalogicos',{controladorId:idController}, {headers:headers})
		.map(res => res.json());
	}
	muestraPin(idPin){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'findOnePin',{id:idPin}, {headers:headers})
		.map(res => res.json());
	}
	MostrarPinesActuadores(ID){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarActuadores',{invernaderoId:ID}, {headers:headers})
		.map(res => res.json());
	}
	
	
	}
	
	
