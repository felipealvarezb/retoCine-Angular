import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCinemaComponent } from './details-cinema.component';

describe('DetailsCinemaComponent', () => {
  let component: DetailsCinemaComponent;
  let fixture: ComponentFixture<DetailsCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
