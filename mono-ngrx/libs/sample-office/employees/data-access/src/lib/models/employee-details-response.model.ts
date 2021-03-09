import { Employee } from '@mono-ngrx/sample-office/util';
import { CommonResponse } from './common-response.model';


export interface EmployeeDetailsResponse extends CommonResponse{
    data: Employee;
}