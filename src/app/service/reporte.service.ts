import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReporteService {

    constructor( private http: HttpClient){

    }


    generarExcelReporte(row:any[]): Observable<any>{
        return this.http.post('http://localhost:8080/api/reporte/exportarReporte',row,{responseType: 'arraybuffer'});
    }
    generarExcelReporteAsistencia(row:any[]): Observable<any>{
        return this.http.post('http://localhost:8080/api/reporte/expRepAsistencia',row,{responseType: 'arraybuffer'});
    }
}