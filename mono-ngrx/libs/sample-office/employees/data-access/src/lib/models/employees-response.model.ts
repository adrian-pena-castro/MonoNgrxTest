import { Employee } from '@mono-ngrx/sample-office/util';
import { CommonResponse } from './common-response.model';


export interface EmployeesResponse extends CommonResponse{
    data: Employee[];
}