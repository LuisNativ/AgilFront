import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datos=[{
    'titulo':'Registro de Notas',
    'url':'/alumno',
    'icon':'fas fa-clock'
  },
  {
    'titulo':'Toma de asistencia',
    'url':'/alumno',
    'icon':'fas fa-clock'
  },
  {
    'titulo':'Reporte de Notas',
    'url':'/alumno',
    'icon':'fas fa-clock'
  },
  {
    'titulo':'Horario',
    'url':'/alumno',
    'icon':'fas fa-clock'
  }]

}
