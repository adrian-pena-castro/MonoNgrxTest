import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeesFacade } from '@mono-ngrx/sample-office/employees/data-access';

@Component({
  selector: 'mono-ngrx-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailContainerComponent implements OnInit {


  public selectedEmployees$ = this.employeesFacade.selectedEmployees$;

  constructor(private employeesFacade : EmployeesFacade) { }

  ngOnInit(): void {
    this.employeesFacade.loadDetails();
  }

}
