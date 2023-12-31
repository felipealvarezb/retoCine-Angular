import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActorsComponent } from './admin-actors.component';

describe('AdminActorsComponent', () => {
  let component: AdminActorsComponent;
  let fixture: ComponentFixture<AdminActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
