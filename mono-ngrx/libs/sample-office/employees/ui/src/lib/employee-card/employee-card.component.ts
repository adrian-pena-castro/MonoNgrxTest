import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Employee } from '@mono-ngrx/sample-office/util';

@Component({
  selector: 'mono-ngrx-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  public employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
