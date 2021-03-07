import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeesFacade } from '@mono-ngrx/sample-office/employees/data-access';

@Component({
  selector: 'mono-ngrx-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesContainerComponent implements OnInit {

  constructor(private employeesFacade: EmployeesFacade) { }

  employees$ = this.employeesFacade.allEmployees$;
  
  ngOnInit(): void {
    this.employeesFacade.init();
  }

}
