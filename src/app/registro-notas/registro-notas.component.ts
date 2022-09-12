import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIDefinition, Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { ModalNotaComponent } from '../modal-nota/modal-nota.component';

@Component({
  selector: 'app-registro-notas',
  templateUrl: './registro-notas.component.html',
  styleUrls: ['./registro-notas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroNotasComponent implements OnInit {

  @ViewChild('table')
  table!: APIDefinition;

  public configuration!: Config;
  public columns: Columns[] = [];
  modal = false;
  selected:any;
  public data = [
    {
    codigo: 'U202213430',
    nombres: 'Andrade Morales Juan',
    estado: 'Matriculado',
    accion: true,
    },
     {
    codigo: 'U202213431',
    nombres: 'Bermudez Ramos Maria',
    estado: 'Matriculado',
    accion: true,
    },
    {
      codigo: 'U202213432',
      nombres: 'Castro Gomez Eduardo',
      estado: 'Matriculado',
      accion: true,
      },
  {
    codigo: 'U202213433',
    nombres: 'Dante Lopez Jose',
    estado: 'Matriculado',
    accion: true,
    },
  {
    codigo: 'U202213434',
    nombres: 'Muñoz Jimenez Julisa',
    estado: 'Matriculado',
    accion: true,
    },
    {
    codigo: 'U202213435',
    nombres: 'Lopez Ramos Fernando',
    estado: 'Matriculado',
    accion: true,
    },
    {
      codigo: 'U202213436',
      nombres: 'Robbiano Luyo Marco',
      estado: 'Matriculado',
      accion: true,
      },
    {
      codigo: 'U202213437',
      nombres: 'Rodriguez Cervantes Camila',
      estado: 'Matriculado',
      accion: true,
      },
];

public datoModal:any;

  constructor(private modalService: NgbModal) { 
  }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    // ... etc.
    this.columns = [
      { key: 'codigo', title: 'Código',width:'15%'},
      { key: 'nombres', title: 'Apellidos y Nombres',width:'40%' },
      { key: 'estado', title: 'Estado',width:'30%' },
      { key: 'accion', title: 'Acción',width:'15%'},
    ];
  }

  onEvent(event: { event: string; value: any }): void {
    this.selected = JSON.stringify(event.value.row, null, 2);
  }

  showModal(row:any){
    console.log(row);
    
    const modal = this.modalService.open(ModalNotaComponent, 
      {centered: true,
       backdrop:true,
       keyboard:true,
       scrollable:true,
       size:'lg'
      });

    modal.componentInstance.datoModal = row;
  }

  hideModal(): void {
    this.modal = false;
  }

}
