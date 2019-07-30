import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class OpcionesService{
	public url: string;

	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	
} 