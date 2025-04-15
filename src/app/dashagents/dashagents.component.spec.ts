import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashagentsComponent } from './dashagents.component';

describe('DashagentsComponent', () => {
  let component: DashagentsComponent;
  let fixture: ComponentFixture<DashagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashagentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
