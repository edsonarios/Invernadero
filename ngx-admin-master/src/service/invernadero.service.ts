import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GLOBAL } from './global';

@Injectable()
export class InvernaderoService {
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
   Añadir(invernadero) {
      let params = JSON.stringify(invernadero);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'invernadero', params, { headers: headers })
         .map((res) => res.json());
   }
   show(invernadero) {
      const params = JSON.stringify(invernadero);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      return this._http
         .post(this.url + 'obtenerInv', params, { headers })
         .map((res) => res.json());
   }
   getInvernadero(idInv): Observable<any> {
      return this.http
         .post<any>(this.url + 'obtenerInv', idInv, this.httpOptions)
         .pipe(retry(1), catchError(this.errorHandl));
   }
   editarInvernadero(invernadero) {
      let params = JSON.stringify(invernadero);
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http
         .post(this.url + 'updateInvernadero', params, { headers: headers })
         .map((res) => res.json());
   }
   deleteInvernaderio(idInv) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return this._http
         .post(
            this.url + 'eliminarInvernadero',
            { invernaderoId: idInv },
            { headers: headers }
         )
         .map((res) => res.json());
   }

   // Error handling
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
