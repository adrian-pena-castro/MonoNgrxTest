import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {  catchError, map, switchMap } from 'rxjs/operators';
import * as EmployeesFeature from './employees.reducer';
import * as EmployeesSelectors from './employees.selectors'
import * as EmployeesActions from './employees.actions';
import { EmployeeService } from '../../service/employee.service';
import { EmployeesFacade } from './employees.facade';
import { EmployeesResponse } from '../../models/employees-response.model';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class EmployeesEffects {
  
  init$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeesActions.init),
    switchMap(() => this.employeeService.getEmployees()
      .pipe(
        map(response => (EmployeesActions.loadEmployeesSuccess({ employees: response.data })),
        catchError((error) => of(EmployeesActions.loadEmployeesFailure({ error }))
      ))
    )
    )
  ));


  loadDetails$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeesActions.loadEmployeeDetails),
    concatLatestFrom(()=>this.store.select(EmployeesSelectors.getSelectedIdFromRouter)),
    switchMap((action, id) => {console.log('action',action); console.log('id',id); return this.employeeService.getEmployeeDetails(id)
    .pipe(
      map(response => (EmployeesActions.loadEmployeeDetailsSuccess({employee: response.data})),
      catchError((error)=> of(EmployeesActions.loadEmployeeDetailsFailure({error}))))
   
    )   })
  ));

  constructor(private actions$: Actions,
    private employeeService: EmployeeService,
    private store: Store) {}
}
