import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule,
  IonicModule],
  declarations: [EmployeeCardComponent],
  exports: [EmployeeCardComponent]
})
export class SampleOfficeEmployeesUiModule {}
