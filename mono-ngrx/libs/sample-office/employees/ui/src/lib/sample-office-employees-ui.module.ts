import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { IonicModule } from '@ionic/angular';
import { SampleOfficeUtilModule } from '@mono-ngrx/sample-office/util';
import { EmployeeCardSkeletonComponent } from './employee-card-skeleton/employee-card-skeleton.component';

@NgModule({
  imports: [CommonModule,
  IonicModule,
  SampleOfficeUtilModule],
  declarations: [EmployeeCardComponent, EmployeeCardSkeletonComponent],
  exports: [EmployeeCardComponent, EmployeeCardSkeletonComponent]
})
export class SampleOfficeEmployeesUiModule {}
