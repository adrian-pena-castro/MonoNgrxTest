import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mono-ngrx-employee-card-skeleton',
  templateUrl: './employee-card-skeleton.component.html',
  styleUrls: ['./employee-card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
