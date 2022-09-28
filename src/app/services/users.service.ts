import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  public getUsers(){

    let queryParams = new HttpParams().append('page','1'); //Let por si quiero hacer el append de más parámetros
    queryParams = queryParams.append('nombre', 'Víctor');

    const headers = new HttpHeaders({
      'token-user': 'ABC123456'
    });

    return this.http.get('https://reqres.in/api/user', {
      params: queryParams,
      headers: headers
    }).pipe(
      map( resp => resp['data'] ),
      catchError( (err: HttpErrorResponse) => {
        return throwError(`HA OCURRIDO UN ERROR: ${err.message}`);
      })
    );

  }

}
