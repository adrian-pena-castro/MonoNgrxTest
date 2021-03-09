import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesFacade } from '@mono-ngrx/sample-office/employees/data-access';

@Component({
  selector: 'mono-ngrx-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesContainerComponent implements OnInit {

  constructor(private employeesFacade: EmployeesFacade, private router: Router) { }

  employees$ = this.employeesFacade.allEmployees$;
  loaded$ = this.employeesFacade.loaded$;
  
  ngOnInit(): void {
    this.employeesFacade.init();
  }

  public goToDetails(id: number): void {
    console.log('details', id)
    this.router.navigate([`employees/${id}`]);
  }
}
