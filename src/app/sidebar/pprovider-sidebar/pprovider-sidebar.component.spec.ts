import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PproviderSidebarComponent } from './pprovider-sidebar.component';

describe('PproviderSidebarComponent', () => {
  let component: PproviderSidebarComponent;
  let fixture: ComponentFixture<PproviderSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PproviderSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PproviderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
