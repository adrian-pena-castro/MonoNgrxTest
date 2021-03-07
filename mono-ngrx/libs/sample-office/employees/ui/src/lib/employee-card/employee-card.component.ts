import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mono-ngrx-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardComponent implements OnInit {

  constructor() { }

  @Input()
  public employee: any;

  ngOnInit(): void {
  }

}
