import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mono-ngrx-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
