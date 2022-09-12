import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-modal-nota',
  templateUrl: './modal-nota.component.html',
  styleUrls: ['./modal-nota.component.css']
})
export class ModalNotaComponent implements OnInit {

  @Input() public datoModal:any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  formRegistroNota!: FormGroup;
  nota!: number;
 


  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private mailService: MailService,
    private spinner: NgxSpinnerService) { 
      
      
    }

  ngOnInit(): void {
    console.log(this.datoModal);
    this.formRegistroNota = this.formBuilder.group({
      codigo: ['',Validators.required],
      nombres: ['',Validators.required],
      estado: ['',Validators.required],
      nota: ['',Validators.required],
    });
  }

  registrarNota(){
      this.spinner.show();
      this.mailService.enviarMail(String(this.datoModal.nombres),String(this.nota)).subscribe(
        result =>{
          this.spinner.hide();
          console.log(result);
          const responseStatus: any = result;
          if (responseStatus.codigo === '0'){
            Swal.fire({
              title: 'Registro Exitoso',
              text: "La nota del Alumno será notificado vía Correo.",
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'OK',
              confirmButtonColor: '#3085d6'
            }).then((result) => {
              if (result.isConfirmed) {
              //  this.formInformacionPago.reset();
                this.activeModal.dismiss();
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ){
        
              }
            });
          }else{
            Swal.fire({
              title: 'Error...',
              width: '400px',
              text: "Consulte con el Administrador del sistema",
              icon: 'error',
              showCancelButton: false,
              confirmButtonText: 'OK',
              confirmButtonColor: '#3085d6'
            });
          }
        },
        error =>{
          console.log(error);
          this.spinner.hide();
        }
      ); 
   
  }
}

 