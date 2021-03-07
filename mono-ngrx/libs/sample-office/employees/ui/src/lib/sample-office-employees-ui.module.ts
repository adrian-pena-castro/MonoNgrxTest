import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { IonicModule } from '@ionic/angular';
import { SampleOfficeUtilModule } from '@mono-ngrx/sample-office/util';

@NgModule({
  imports: [CommonModule,
  IonicModule,
  SampleOfficeUtilModule],
  declarations: [EmployeeCardComponent],
  exports: [EmployeeCardComponent]
})
export class SampleOfficeEmployeesUiModule {}
