import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class HorarioService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	//
	adicionarNuevaHora(idBomba,horaIni,dur){
		let headers= new Headers({'Content-Type':'application/json'});
		console.log('ID DE LA BOMBA :');
		console.log(idBomba);
		console.log('HORARIO INICIO :');
		console.log(horaIni);
		console.log('DURACION :');
		console.log(dur);

		return this._http.post(this.url+'crearHora',{pineId:idBomba,horaInicio:horaIni, duracion:dur}, {headers:headers})
		.map(res => res.json())
	}
	mostrarHorarios(idInvernadero)
	{
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'mostrarHorario2',{id:idInvernadero}, {headers:headers})
		.map(res => res.json())
	}
	eliminarHorario(idHorario){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'eliminarHora',{id:idHorario}, {headers:headers})
		.map(res => res.json())
	}
	obtenerBombas(idInvernadero){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'obtenerBombasControlador',{id:idInvernadero}, {headers:headers})
		.map(res => res.json())
	}
	
	
}