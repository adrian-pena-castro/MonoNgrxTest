import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public titleClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onTitleClicked(): void {
    console.log(this.employee.id)
    this.titleClicked.emit(this.employee.id);
  }
}
