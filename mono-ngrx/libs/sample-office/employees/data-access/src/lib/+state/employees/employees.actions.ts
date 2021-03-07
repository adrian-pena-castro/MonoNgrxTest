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
