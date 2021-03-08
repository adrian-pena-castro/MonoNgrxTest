import { Employee } from '@mono-ngrx/sample-office/util';


export interface EmployeesResponse {
    status: string;
    data: Employee[];
    message: string;
}