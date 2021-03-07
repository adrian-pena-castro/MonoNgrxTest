import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesResponse } from '../models/employees-response.model';
import { tap } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
  })
  export class EmployeeService {
  
    private urlEmployees = 'http://dummy.restapiexample.com/api/v1/employees';
  
    constructor(private http: HttpClient) { }
    
    private SUCCESS = 'success';
  
    getEmployees(): Observable<EmployeesResponse>{   
      return this.http.get<EmployeesResponse>(this.urlEmployees, {}).pipe(
          tap((response) => this.catchError(response))
      )
    }

    catchError(response: EmployeesResponse) {
        if(response.status !== this.SUCCESS)
        {
            throw new Error('Se ha producido un error');
        }
        return response;
    }
  
  }