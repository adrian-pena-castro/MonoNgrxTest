import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { EmployeesResponse } from '../models/employees-response.model';

import { map, mergeMap, tap } from 'rxjs/operators';

import { EmployeeDetailsResponse } from '../models/employee-details-response.model';


import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root',
  })
  export class EmployeeService {
  
    private urlEmployees = 'http://dummy.restapiexample.com/api/v1/employees';
  
    constructor(private http: HttpClient) { }
    
    private SUCCESS = 'success';
  
    getEmployees(): Observable<EmployeesResponse>{   
      return this.http.get<EmployeesResponse>(this.urlEmployees, {}).pipe(
          concatMap(response => of(response).pipe(delay(5000),
          map((response, number) => this.catchError(response)))
          )
      )
    }

    catchError(response: EmployeesResponse) {
      console.log('response',response);
        if(response.status !== this.SUCCESS)
        {
            throw new Error('Se ha producido un error');
        }
        return response;
    }
  
    getEmployeeDetails(id: string): Observable<HttpEvent<EmployeeDetailsResponse>>{   
      return this.http.get<EmployeeDetailsResponse>(`${this.urlEmployees}/${id}`, null);
    }
  }