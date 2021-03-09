import { createAction, props } from '@ngrx/store';
import { EmployeesEntity } from './employees.models';

export const init = createAction('[Employees Page] Init');

export const loadEmployeesSuccess = createAction(
  '[Employees/API] Load Employees Success',
  props<{ employees: EmployeesEntity[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employees/API] Load Employees Failure',
  props<{ error: any }>()
);



export const loadEmployeeDetails = createAction(
  '[Employee Detail Page] load',
  props<{ id: number }>()
);

export const loadEmployeeDetailsSuccess = createAction(
  '[Employees/API] Load Employee Detail Success',
  props<{ employee: EmployeesEntity }>()
);

export const loadEmployeeDetailsFailure = createAction(
  '[Employees/API] Load Employee Detail Failure',
  props<{ error: any }>()
);