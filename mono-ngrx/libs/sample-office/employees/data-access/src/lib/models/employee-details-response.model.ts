import { Employee } from '@mono-ngrx/sample-office/util';


export interface EmployeeDetailsResponse {
    status: string;
    data: Employee;
    message: string;
}