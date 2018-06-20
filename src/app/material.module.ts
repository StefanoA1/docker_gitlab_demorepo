import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,
  MatCardModule, MatSpinner, MatFormField, MatInputModule, MatDialogModule, MatTableModule } from '@angular/material';

const modules = [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule
];

@NgModule({
imports: [...modules],
exports: [...modules],
})
export class CustomMaterialModule { }
