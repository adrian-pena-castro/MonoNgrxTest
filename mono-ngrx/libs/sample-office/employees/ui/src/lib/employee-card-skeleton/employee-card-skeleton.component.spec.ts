import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardSkeletonComponent } from './employee-card-skeleton.component';

describe('EmployeeCardSkeletonComponent', () => {
  let component: EmployeeCardSkeletonComponent;
  let fixture: ComponentFixture<EmployeeCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCardSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
