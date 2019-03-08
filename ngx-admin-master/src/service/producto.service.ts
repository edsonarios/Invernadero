import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	ObtenerProductos(){
		return this._http.get(this.url+'obtenerProductos').map(res => res.json())
	}
	añadirProducto(producto)
	{
		let params = JSON.stringify(producto);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'producto',params, {headers:headers})
		.map(res => res.json())
	}
	//muestra productos de el usuario por id de invernadero
	mostrarProductosInvernadero(idInv){
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'obtenerProdInv',{invernaderoId:idInv}, {headers:headers})
		.map(res => res.json())
	}
	añadirProductoUsuario(idInv, idProd){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'agregarHistorialProducto',{invernaderoId:idInv,productoId:idProd,cantidad:'50'}, {headers:headers})
		.map(res => res.json())
	}

	EliminaProducto(idProd){
		let headers= new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'eliminarProducto',{id:idProd}, {headers:headers})
		.map(res => res.json())
	}
}