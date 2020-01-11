import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatButtonModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatPaginatorIntl,
  MatListModule
} from '@angular/material'
// import { CdkTableModule } from '@angular/cdk/table';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { MatPaginatorImpl } from './mat-paginator';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    //side
    MatSidenavModule,
    //toast
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,

    MatDialogModule,
    MatSelectModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,

    MatAutocompleteModule,

    MatProgressBarModule,
    CdkTableModule,

    // MatListModule
  ],

  // para el padre module
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    // MatListModule,

    CdkTableModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES'
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorImpl
    }
  ]
})
export class MaterialModule { }
