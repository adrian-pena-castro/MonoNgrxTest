import { Employee } from './employee.model';

export interface EmployeesResponse {
    status: string;
    data: Employee[];
    message: string;
}