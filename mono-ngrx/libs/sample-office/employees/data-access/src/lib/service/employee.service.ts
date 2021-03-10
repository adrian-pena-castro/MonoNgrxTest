import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { EmployeesResponse } from '../models/employees-response.model';

import { map, mergeMap, tap, catchError } from 'rxjs/operators';

import { EmployeeDetailsResponse } from '../models/employee-details-response.model';


import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';
import { CommonResponse } from '../models/common-response.model';

@Injectable({
    providedIn: 'root',
  })
  export class EmployeeService {
  
    private urlEmployees = 'http://dummy.restapiexample.com/api/v1';
  
    constructor(private http: HttpClient) { }
    
    private SUCCESS = 'success';
    private HTTP_SUCCES_CODE = 200;
  
    public getEmployees(): Observable<EmployeesResponse>{   
      return this.http.get<EmployeesResponse>(`${this.urlEmployees}/employees`, { observe: 'response' }).pipe(
          concatMap(response => of(response).pipe(
              delay(1000),
              map((response, number) => {console.log(response);return this.parseError(response)})
            )
          ),
          catchError((response) => {console.log(response); return throwError(response.statusText)})
      )
    }
  
    public getEmployeeDetails(id: number): Observable<EmployeeDetailsResponse>{   
      return this.http.get<EmployeeDetailsResponse>(`${this.urlEmployees}/employee/${id}`, { observe: 'response' }).pipe(
        map((response)=>  this.parseError(response)),
        catchError((response) => {console.log(response); return throwError(response.statusText)})
      );
    }


    private parseError(response: any) {
      console.log('response',response);
        if(response.status !== this.HTTP_SUCCES_CODE ||  
          (response.body && response.body.status!== this.SUCCESS))
        {
            throw new Error('Se ha producido un error');
        }
        return response.body;
    }
  }