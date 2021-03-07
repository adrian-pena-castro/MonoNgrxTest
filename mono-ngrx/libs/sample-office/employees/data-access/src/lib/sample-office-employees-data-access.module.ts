import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleOfficeUtilModule } from '@mono-ngrx/sample-office/util';

@NgModule({
  imports: [CommonModule,
    SampleOfficeUtilModule],
})
export class SampleOfficeEmployeesDataAccessModule {}
