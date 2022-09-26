import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIDefinition, Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReporteService } from '../service/reporte.service';

@Component({
  selector: 'app-reporte-nota',
  templateUrl: './reporte-nota.component.html',
  styleUrls: ['./reporte-nota.component.css']
})
export class ReporteNotaComponent implements OnInit {

  @ViewChild('table')
  table!: APIDefinition;

  public configuration!: Config;
  public columns: Columns[] = [];
  modal = false;
  formReporteNota: FormGroup | any;
  selected:any;
  dataFiltro:any;
  botonDisabled:boolean = true;


  constructor(private reporteService: ReporteService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    // ... etc.

    this.formReporteNota = this.formBuilder.group({
      curso: ['',Validators.required],
      seccion: ['',Validators.required]
    });
    this.columns = [
      { key: 'codigo', title: 'Código',width:'10%'},
      { key: 'nombres', title: 'Nombres',width:'20%',},
      { key: 'practica1', title: 'Práctica 1',width:'15%' },
      { key: 'practica2', title: 'Práctica 2',width:'15%' },
      { key: 'practica3', title: 'Práctica 3',width:'15%' },
      { key: 'practica4', title: 'Práctica 4',width:'15%' },
      { key: 'examenFinal', title: 'Examen Final',width:'10%' }
    ];
  }

  onEvent(event: { event: string; value: any }): void {
    this.selected = JSON.stringify(event.value.row, null, 2);
  }

  seleccionCurso(){
    var curso = this.formReporteNota.get('curso').value;
    var seccion = this.formReporteNota.get('seccion').value;

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
    var curso = this.formReporteNota.get('curso').value;
    var seccion = this.formReporteNota.get('seccion').value;

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

  generarReporte(){
    this.spinner.show();
    this.reporteService.generarExcelReporte(this.dataFiltro).subscribe(
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

  //HardCode Registros
  public dataCurso1Seccion1 = [
    {
      codigo: 'U202213431',
      nombres: 'Andrade Morales Juan',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213432',
      nombres: 'Bermudez Ramos Maria',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213433',
      nombres: 'Castro Gomez Eduardo',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213434',
      nombres: 'Dante Lopez Jose',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213435',
      nombres: 'Muñoz Jimenez Julisa',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213436',
      nombres: 'Lopez Ramos Fernando',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213437',
      nombres: 'Robbiano Luyo Marco',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U202213438',
      nombres: 'Rodriguez Cervantes Camila',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
  ];

  public dataCurso1Seccion2 = [
    {
      codigo: 'U201713431',
      nombres: 'Perlita Manzano',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201813432',
      nombres: 'Mayte Fortuny Suárez',
      practica1: 10,
      practica2: 10,
      practica3: 11,
      practica4: 12,
      examenFinal: 18
    },
    {
      codigo: 'U201713433',
      nombres: 'Loreto Iniesta Oller',
      practica1: 20,
      practica2: 18,
      practica3: 15,
      practica4: 14,
      examenFinal: 13
    },
    {
      codigo: 'U201813434',
      nombres: 'Amelia Elías-Noguera',
      practica1: 12,
      practica2: 13,
      practica3: 14,
      practica4: 15,
      examenFinal: 11
    },
    {
      codigo: 'U201813435',
      nombres: 'Clotilde Crespo Bustamante',
      practica1: 11,
      practica2: 11,
      practica3: 12,
      practica4: 13,
      examenFinal: 15
    },
    {
      codigo: 'U201613436',
      nombres: 'Victoriano Julio César Martorell Arce',
      practica1: 14,
      practica2: 12,
      practica3: 13,
      practica4: 15,
      examenFinal: 11
    },
    {
      codigo: 'U201913437',
      nombres: 'Felicidad Pino Morillo',
      practica1: 10,
      practica2: 18,
      practica3: 12,
      practica4: 11,
      examenFinal: 12
    },
    {
      codigo: 'U202013438',
      nombres: 'Macaria Hernando Bermejo',
      practica1: 9,
      practica2: 12,
      practica3: 15,
      practica4: 15,
      examenFinal: 14
    },
    {
      codigo: 'U201713431',
      nombres: 'Perlita Manzano',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Perlita Manzano',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Galo Geraldo Baena Baquero',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Isabel Botella Dominguez',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Calixta Vigil Cifuentes',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Perlita Manzano',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
    {
      codigo: 'U201713431',
      nombres: 'Manu Chelo Alfonso Alegria',
      practica1: 15,
      practica2: 18,
      practica3: 17,
      practica4: 15,
      examenFinal: 17
    },
  ];
}
