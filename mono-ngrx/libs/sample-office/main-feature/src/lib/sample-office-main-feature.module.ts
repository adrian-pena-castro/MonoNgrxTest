import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '', 
        component: MainContainerComponent,
        children: [{
          path: '',
          redirectTo: 'employees',
          pathMatch: 'full',
        },
        {
          path: 'employees',
          loadChildren: () =>
            import('@mono-ngrx/sample-office/employees/feature').then((m) => m.SampleOfficeEmployeesFeatureModule),
        }
        ]} 
    ]),
  ],
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent]
})
export class SampleOfficeMainFeatureModule {}
