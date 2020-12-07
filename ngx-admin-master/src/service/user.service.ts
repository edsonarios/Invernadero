import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { InvernaderoI } from '../model/interfaces';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
   public url: string;

   constructor(private _http: Http, private http: HttpClient) {
      this.url = GLOBAL.url;
   }

   // Http Headers
   httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
      }),
   };
   register(user_to_register) {
      let params = JSON.stringify(user_to_register);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'usuario', params, { headers: headers })
         .map((res) => res.json());
   }
   SingUp(user) {
      let params = JSON.stringify(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'login', params, { headers: headers })
         .map((res) => res.json());
   }

   getInvernaderos(iduser): Observable<any> {
      return this.http
         .post<any>(this.url + 'obtenerInvernaderos', iduser, this.httpOptions)
         .pipe(retry(1), catchError(this.errorHandl));
   }
   ShowInvernaderos(iduser) {
      let params = JSON.stringify(iduser);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return this._http
         .post(this.url + 'obtenerInvernaderos', params, { headers: headers })
         .map((res) => res.json());
   }
   obtenerUsuarios() {
      return this._http
         .get(this.url + 'obtenerUsuarios')
         .map((res) => res.json());
   }
   getUsers() {
      return this.http
         .get<InvernaderoI>(this.url + 'obtenerUsuarios')
         .pipe(retry(1), catchError(this.errorHandl));
   }

   obtenerAdmins() {
      return this._http
         .get(this.url + 'obtenerAdmins')
         .map((res) => res.json());
   }
   obtenerTesters() {
      return this._http
         .get(this.url + 'obtenerTester')
         .map((res) => res.json());
   }
   Notifications(user) {
      let params = JSON.stringify(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'getNotificaciones', params, { headers: headers })
         .map((res) => res.json());
   }

   detalleUsuario(iduser) {
      let params = JSON.stringify(iduser);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'obtenerUser', params, { headers: headers })
         .map((res) => res.json());
   }
   cambiarPassword(user) {
      let params = JSON.stringify(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'updateUsuarioPassword', params, { headers: headers })
         .map((res) => res.json());
   }
   editarUser(user) {
      let params = JSON.stringify(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'updateUsuario', params, { headers: headers })
         .map((res) => res.json());
   }
   deleteUser(idUser) {
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(
            this.url + 'eliminarUsuario',
            { id: idUser },
            { headers: headers }
         )
         .map((res) => res.json());
   }
   errorHandl(error): any {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
         // Get client-side error
         errorMessage = error.error.message;
      } else {
         // Get server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
}
