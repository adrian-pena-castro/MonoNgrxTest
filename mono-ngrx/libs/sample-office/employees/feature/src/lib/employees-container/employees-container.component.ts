import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mono-ngrx-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
