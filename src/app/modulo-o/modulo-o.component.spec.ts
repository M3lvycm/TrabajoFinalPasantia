import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloOComponent } from './modulo-o.component';

describe('ModuloOComponent', () => {
  let component: ModuloOComponent;
  let fixture: ComponentFixture<ModuloOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
