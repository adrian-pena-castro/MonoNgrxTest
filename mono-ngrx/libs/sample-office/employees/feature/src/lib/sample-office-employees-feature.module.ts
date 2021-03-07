import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesContainerComponent } from './employees-container/employees-container.component';
import { SampleOfficeEmployeesUiModule } from '@mono-ngrx/sample-office/employees/ui'
import { IonicModule } from '@ionic/angular';
import { SampleOfficeEmployeesDataAccessModule } from '@mono-ngrx/sample-office/employees/data-access';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SampleOfficeEmployeesDataAccessModule,
    SampleOfficeEmployeesUiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: EmployeesContainerComponent} 
    ]),
  ],
  declarations: [EmployeesContainerComponent],
  exports: [EmployeesContainerComponent]
})
export class SampleOfficeEmployeesFeatureModule {}
