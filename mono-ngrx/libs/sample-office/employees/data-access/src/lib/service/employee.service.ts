import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesResponse } from '../models/employees-response.model';



@Injectable({
    providedIn: 'root',
  })
  export class EmployeeService {
  
    private urlEmployees = 'http://dummy.restapiexample.com/api/v1/employees';
  
    constructor(private http: HttpClient) { }
  
  
    getEmployees(): Observable<HttpEvent<EmployeesResponse>>{   
      return this.http.get<EmployeesResponse>(this.urlEmployees, null);
    }
  
    getEmployeeDetails(id: string): Observable<HttpEvent<EmployeesResponse>>{   
      return this.http.get<EmployeesResponse>(`${this.urlEmployees}/${id}`, null);
    }
  }