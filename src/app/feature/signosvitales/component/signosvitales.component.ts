import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FiltroConsultar } from '../../buscar/shared/filtroConsulta';
import { SignosvitalesService } from '../service/signosvitales.service';
import { SignosVitales } from '../shared/signosvitales';

@Component({
  selector: 'app-signosvitales',
  templateUrl: './signosvitales.component.html',
  styleUrls: ['./signosvitales.component.css']
})
export class SignosvitalesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  form: FormGroup;
  maxFecha = new Date();
  puedeClick = true;

  columns = [
    { columnDef: 'paciente', header: 'Nombre', cell: (element: SignosVitales) => `${element.paciente.nombres}` },
    { columnDef: 'fecha', header: 'Fecha', cell: (element: SignosVitales) => `${element.fecha}` },
    { columnDef: 'temperatura', header: 'Temperatura', cell: (element: SignosVitales) => `${element.temperatura}` },
    { columnDef: 'pulso', header: 'Pulso', cell: (element: SignosVitales) => `${element.pulso}` },
    { columnDef: 'ritmoRespiratorio', header: 'Ritmo Resp', cell: (element: SignosVitales) => `${element.ritmoRespiratorio}` }
  ];
  displayedColumns = this.columns.map(c => c.columnDef).concat(['acciones']);
  dataSource: MatTableDataSource<SignosVitales>;


  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private signosService: SignosvitalesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      dni: new FormControl(''),
      nombreCompleto: new FormControl(''),
      fechaConsulta: new FormControl()
    });

    this.listarTodo();

    this.signosService.cambioRealizado.subscribe(
      (reload: boolean) => {
        if (reload) {
          this.listarTodo();
          this.puedeClick = true;
          this.signosService.cambioRealizado.next(false);
          this.signosService.signoEditar = undefined;
        }
      }
    );
  }

  listarTodo() {
    this.signosService.listarTodos().subscribe(
      (signos) => {
        this.dataSource = new MatTableDataSource<SignosVitales>(signos);
      }
    );
  }

  eliminar(id: number) {
    this.signosService.eliminar(id).subscribe(
      (data) => {
        this.signosService.cambioRealizado.next(true);
        const mensaje = 'Eliminado con éxito';
        this.snack.open(mensaje, 'mensaje', { duration: 2000 });
      }
    );
  }

  buscar() {
    const filtro = new FiltroConsultar(
      this.form.value.dni,
      this.form.value.nombreCompleto,
      this.form.value.fechaConsulta
    );
    this.signosService.listarfiltro(filtro).subscribe(
      (signos: SignosVitales[]) => {
        console.log(signos);
        this.dataSource = new MatTableDataSource<SignosVitales>(signos);
      }
    );

  }

  crearModificar(element?: SignosVitales) {
    // [routerLink]="[ 'edicion', element.id ]"
    if (element) {
      this.signosService.signoEditar = element;
    }
    this.puedeClick = false;
    this.router.navigateByUrl('/signosvitales/edicion');
  }


}
