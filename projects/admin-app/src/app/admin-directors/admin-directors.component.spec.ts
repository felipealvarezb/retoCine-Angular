import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectorsComponent } from './admin-directors.component';

describe('AdminDirectorsComponent', () => {
  let component: AdminDirectorsComponent;
  let fixture: ComponentFixture<AdminDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
