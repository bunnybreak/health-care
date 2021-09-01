import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberSidebarComponent } from './family-member-sidebar.component';

describe('FamilyMemberSidebarComponent', () => {
  let component: FamilyMemberSidebarComponent;
  let fixture: ComponentFixture<FamilyMemberSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMemberSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
