import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {  catchError, map, switchMap } from 'rxjs/operators';
import * as EmployeesFeature from './employees.reducer';
import * as EmployeesActions from './employees.actions';
import { EmployeeService } from '../../service/employee.service';
import { EmployeesFacade } from './employees.facade';
import { EmployeesResponse } from '../../models/employees-response.model';
import { of } from 'rxjs';

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
  ))
  ;

  constructor(private actions$: Actions,
    private employeeService: EmployeeService) {}
}
