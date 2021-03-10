import { RouterSelectors } from '@mono-ngrx/sample-office/util';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EMPLOYEES_FEATURE_KEY,
  State,
  EmployeesPartialState,
  employeesAdapter,
} from './employees.reducer';

// Lookup the 'Employees' feature state managed by NgRx
export const getEmployeesState = createFeatureSelector<
  EmployeesPartialState,
  State
>(EMPLOYEES_FEATURE_KEY);

const { selectAll, selectEntities } = employeesAdapter.getSelectors();

export const getEmployeesLoaded = createSelector(
  getEmployeesState,
  (state: State) => state.loaded
);

export const getEmployeesError = createSelector(
  getEmployeesState,
  (state: State) => state.error
);

export const getAllEmployees = createSelector(
  getEmployeesState,
  (state: State) => selectAll(state)
);

export const getEmployeesEntities = createSelector(
  getEmployeesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEmployeesState,
  (state: State) => state.selectedId
);



export const getSelectedIdFromRouter = createSelector(
  RouterSelectors.selectParamId,
  (id): number => { console.log('selectedId', id); return Number(id); }
);

export const getSelected = createSelector(
  getEmployeesEntities,
  getSelectedIdFromRouter,
  (entities, selectedId) => selectedId && entities[selectedId]
);