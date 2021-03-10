import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesContainerComponent } from './employees-container/employees-container.component';
import { SampleOfficeEmployeesUiModule } from '@mono-ngrx/sample-office/employees/ui'
import { IonicModule } from '@ionic/angular';
import { EmployeeDetailContainerComponent } from './employee-detail-container/employee-detail-container.component';
import { SampleOfficeEmployeesDataAccessModule } from '@mono-ngrx/sample-office/employees/data-access';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SampleOfficeEmployeesUiModule,
    SampleOfficeEmployeesDataAccessModule,
    RouterModule.forChild([
      {path: ':id', component: EmployeeDetailContainerComponent},
      {path: '', pathMatch: 'full', component: EmployeesContainerComponent},
      
    ]),
  ],
  declarations: [EmployeesContainerComponent, EmployeeDetailContainerComponent],
  exports: [EmployeesContainerComponent, EmployeeDetailContainerComponent]
})
export class SampleOfficeEmployeesFeatureModule {}
