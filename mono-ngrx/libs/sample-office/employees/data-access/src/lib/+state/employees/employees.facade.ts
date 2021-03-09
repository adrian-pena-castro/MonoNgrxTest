import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as EmployeesActions from './employees.actions';
import * as EmployeesFeature from './employees.reducer';
import * as EmployeesSelectors from './employees.selectors';

@Injectable()
export class EmployeesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(EmployeesSelectors.getEmployeesLoaded));
  allEmployees$ = this.store.pipe(select(EmployeesSelectors.getAllEmployees));
  selectedEmployees$ = this.store.pipe(select(EmployeesSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(EmployeesActions.init());
  }

  loadDetails() {
    this.store.dispatch(EmployeesActions.loadEmployeeDetails());
  }
}
