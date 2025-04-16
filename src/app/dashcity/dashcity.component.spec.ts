import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcityComponent } from './dashcity.component';

describe('DashcityComponent', () => {
  let component: DashcityComponent;
  let fixture: ComponentFixture<DashcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashcityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
