import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { ResponseObjeto } from '../dto/response-objeto';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MailService {

    constructor( private http: HttpClient){

    }

    enviarMail(alumno:string,nota:string):Observable<ResponseObjeto>{
        return this.http.post<ResponseObjeto>('http://localhost:8080/api/mail/sendMail/'+
        alumno + '/'+nota,'');
    }
}