import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReprogramarComponent } from './reprogramar/reprogramar.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroNotasComponent } from './registro-notas/registro-notas.component';
import { TableModule } from 'ngx-easy-table';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalNotaComponent } from './modal-nota/modal-nota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReporteNotaComponent } from './reporte-nota/reporte-nota.component';
import { ReporteAsistenciaComponent } from './reporte-asistencia/reporte-asistencia.component';

const appRoutes:Routes=[
  {path:'',component:CuentaComponent},
  {path:'cuenta',component:CuentaComponent},
  {path:'alumno',component:AlumnoComponent},
  {path:'horario',component:HorarioComponent},
  {path:'reserva',component:ReservaComponent},
  {path:'reprogramar',component:ReprogramarComponent},
  {path:'notas',component:RegistroNotasComponent},
  {path:'reporteNota',component:ReporteNotaComponent},
  {path:'reporteAsistencia',component:ReporteAsistenciaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    AlumnoComponent,
    HorarioComponent,
    ReservaComponent,
    ReprogramarComponent,
    RegistroNotasComponent,
    ModalNotaComponent,
    ReporteNotaComponent,
    ReporteAsistenciaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
