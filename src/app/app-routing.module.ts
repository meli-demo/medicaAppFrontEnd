import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './core/guard/guard.service';
import { Not401Component } from './core/not401/not401.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: 'not-401', component: Not401Component },

  // predef
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature/login/login.module').then(mod => mod.LoginModule)
  },

  {
    path: 'paciente',
    loadChildren: () => import('./feature/paciente/paciente.module').then(m => m.PacienteModule),
    canActivate: [GuardService]
  },

  {
    path: 'especialidad',
    loadChildren: () => import('./feature/especialidad/especialidad.module').then(m => m.EspeciaidadModule),
    canActivate: [GuardService]
  },

  {
    path: 'examen',
    loadChildren: () => import('./feature/examen/examen.module').then(m => m.ExamenModule),
    canActivate: [GuardService]
  },

  {
    path: 'medico',
    loadChildren: () => import('./feature/medico/medico.module').then(m => m.MedicoModule),
    canActivate: [GuardService]
  },

  {
    path: 'consulta',
    loadChildren: () =>
      import('./feature/consulta/consulta.module').then(mod => mod.ConsultaModule),
    canActivate: [GuardService]
  },

  {
    path: 'consulta-especial',
    loadChildren: () =>
      import('./feature/consulta/consulta-especial.module').then(mod => mod.ConsultaEspecialModule),
    canActivate: [GuardService]
  },

  {
    path: 'buscar',
    loadChildren: () =>
      import('./feature/buscar/buscar.module').then(mod => mod.BuscarModule),
    canActivate: [GuardService]
  },

  {
    path: 'reporte',
    loadChildren: () =>
      import('./feature/reporte/reporte.module').then(mod => mod.ReporteModule),
    canActivate: [GuardService]
  },

  {
    path: 'perfil',
    loadChildren: () =>
      import('./feature/perfil/perfil.module').then(mod => mod.PerfilModule),
    canActivate: [GuardService]
  },

  {
    path: 'signosvitales',
    loadChildren: () =>
      import('./feature/signosvitales/singosvitales.module').then(mod => mod.SignosVitalesModule),
    canActivate: [GuardService]
  },

  {
    path: 'archivo',
    loadChildren: () =>
      import('./feature/archivo/archivo.module').then(mod => mod.ArchivoModule),
    canActivate: [GuardService]
  },

  // recuperar/gfdhfhjgjytj
  {
    path: 'recuperar',
    loadChildren: () =>
      import('./feature/login/recuperar.module').then(mod => mod.RecuperarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // para la navegación en producción
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }]
})
export class AppRoutingModule { }
