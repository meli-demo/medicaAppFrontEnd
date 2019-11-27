import { Consulta } from 'src/app/_model/consulta';
import { DetalleConsulta } from 'src/app/_model/detalleConsulta';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-detalle-dialog',
  templateUrl: './detalle-dialog.component.html',
  styleUrls: ['./detalle-dialog.component.css']
})
export class DetalleDialogComponent {
  
  detallesConsulta: DetalleConsulta[];
  nombrePaciente: String;
  fecha: String;
  
  constructor(private dialogRef: MatDialogRef<DetalleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Consulta) {

      this.detallesConsulta = this.data.detalleConsulta;
      this.nombrePaciente = this.data.paciente.nombres + this.data.paciente.apellidos;
      this.fecha = this.data.fecha.split('T')[0];

     }
  
 

  closeModal(){
    this.dialogRef.close();

  }
 

}
