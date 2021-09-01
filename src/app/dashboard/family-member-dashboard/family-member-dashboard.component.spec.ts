import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberDashboardComponent } from './family-member-dashboard.component';

describe('FamilyMemberDashboardComponent', () => {
  let component: FamilyMemberDashboardComponent;
  let fixture: ComponentFixture<FamilyMemberDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMemberDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
