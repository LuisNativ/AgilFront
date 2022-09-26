import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIDefinition, Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReporteService } from '../service/reporte.service';

@Component({
  selector: 'app-reporte-asistencia',
  templateUrl: './reporte-asistencia.component.html',
  styleUrls: ['./reporte-asistencia.component.css']
})
export class ReporteAsistenciaComponent implements OnInit {

  @ViewChild('table')
  table!: APIDefinition;

  public configuration!: Config;
  public columns: Columns[] = [];
  formReporteAsistencia: FormGroup | any;
  dataFiltro:any;
  botonDisabled:boolean = true;

  constructor(
    private reporteService: ReporteService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) { 

  
  }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;

    this.formReporteAsistencia = this.formBuilder.group({
      curso: ['',Validators.required],
      seccion: ['',Validators.required]
    });

    this.columns = [
      { key: 'nro', title: 'Nro.',width:'10%'},
      { key: 'codigo', title: 'Código',width:'15%'},
      { key: 'nombres', title: 'Nombres',width:'30%',},
      { key: 'dictadas', title: 'Dictadas',width:'15%' },
      { key: 'asistidas', title: 'Asistidas',width:'15%' },
      { key: 'noasistida', title: 'No Asistidas',width:'15%' }
    ];
  }

  generarReporteAsistencia(){
    this.spinner.show();
    this.reporteService.generarExcelReporteAsistencia(this.dataFiltro).subscribe(
      result =>{
        const blob = new Blob([result],
          {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
        const objectUrl = (window.URL).createObjectURL(blob);

        const a = document.createElement('a');
        a.href = objectUrl;
        a.target = '_blank';
        a.download = 'Reporte-' + new Date().getTime();
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 3000);
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
        
      }
    );
  }

  seleccionCurso(){
    var curso = this.formReporteAsistencia.get('curso').value;
    var seccion = this.formReporteAsistencia.get('seccion').value;

    if(curso !== '' && seccion !== ''){
      this.botonDisabled = false;
      if(curso == '1'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }else if(curso == '2'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){

        }
      }else if(curso == '3'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }else if(curso == '4'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }
     
    }else if(curso == '' || seccion == ''){
      this.dataFiltro = [];
      this.botonDisabled = true;
    }
  }

  seleccionSeccion(){
    var curso = this.formReporteAsistencia.get('curso').value;
    var seccion = this.formReporteAsistencia.get('seccion').value;

    if(curso !== '' && seccion !== ''){
      this.botonDisabled = false;
      if(curso == '1'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }else if(curso == '2'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){

        }
      }else if(curso == '3'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }else if(curso == '4'){
        if(seccion == '1'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '2'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }else if(seccion == '3'){
          this.dataFiltro = [...this.dataCurso1Seccion1];
        }else if(seccion == '4'){
          this.dataFiltro = [...this.dataCurso1Seccion2];
        }
      }
     
    }else if(curso == '' || seccion == ''){
      this.dataFiltro = [];
      this.botonDisabled = true;
    }
  }

  //HardCode Registros
  public dataCurso1Seccion1 = [
    {
      nro: 1,
      codigo: 'U202213431',
      nombres: 'Andrade Morales Juan',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 2,
      codigo: 'U202213432',
      nombres: 'Bermudez Ramos Maria',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 3,
      codigo: 'U202213433',
      nombres: 'Castro Gomez Eduardo',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 4,
      codigo: 'U202213434',
      nombres: 'Dante Lopez Jose',
      dictadas: 16,
      asistidas: 15,
      noasistida: 1
    },
    {
      nro: 5,
      codigo: 'U202213435',
      nombres: 'Muñoz Jimenez Julisa',
      dictadas: 16,
      asistidas: 14,
      noasistida: 2
    },
    {
      nro: 6,
      codigo: 'U202213436',
      nombres: 'Lopez Ramos Fernando',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 7,
      codigo: 'U202213437',
      nombres: 'Robbiano Luyo Marco',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 8,
      codigo: 'U202213438',
      nombres: 'Rodriguez Cervantes Camila',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 9,
      codigo: 'U202213731',
      nombres: 'Salas Perez Jose',
      dictadas: 16,
      asistidas: 15,
      noasistida: 1
    },
    {
      nro: 10,
      codigo: 'U202213932',
      nombres: 'Santos Morales Emilia',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
  ];

  public dataCurso1Seccion2 = [
    {
      nro: 1,
      codigo: 'U202213431',
      nombres: 'Perlita Manzano',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 2,
      codigo: 'U202213432',
      nombres: 'Mayte Fortuny Suárez',
      dictadas: 16,
      asistidas: 14,
      noasistida: 2
    },
    {
      nro: 3,
      codigo: 'U202213433',
      nombres: 'Loreto Iniesta Oller',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 4,
      codigo: 'U202213434',
      nombres: 'Amelia Elías-Noguera',
      dictadas: 16,
      asistidas: 15,
      noasistida: 1
    },
    {
      nro: 5,
      codigo: 'U202213435',
      nombres: 'Clotilde Crespo Bustamante',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 6,
      codigo: 'U202213436',
      nombres: 'Victoriano Julio César Martorell Arce',
      dictadas: 16,
      asistidas: 14,
      noasistida: 2
    },
    {
      nro: 7,
      codigo: 'U202213437',
      nombres: 'Felicidad Pino Morillo',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 8,
      codigo: 'U202213438',
      nombres: 'Macaria Hernando Bermejo',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 9,
      codigo: 'U202213739',
      nombres: 'Perlita Manzano',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 10,
      codigo: 'U202213940',
      nombres: 'Galo Geraldo Baena Baquero',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 11,
      codigo: 'U202213941',
      nombres: 'Isabel Botella Dominguez',
      dictadas: 16,
      asistidas: 15,
      noasistida: 1
    },
    {
      nro: 12,
      codigo: 'U202213942',
      nombres: 'Calixta Vigil Cifuentes',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
    {
      nro: 13,
      codigo: 'U202213943',
      nombres: 'Manu Chelo Alfonso Alegria',
      dictadas: 16,
      asistidas: 16,
      noasistida: 0
    },
  ];

}
