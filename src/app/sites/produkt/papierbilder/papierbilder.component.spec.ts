import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapierbilderComponent } from './papierbilder.component';

describe('PapierbilderComponent', () => {
  let component: PapierbilderComponent;
  let fixture: ComponentFixture<PapierbilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PapierbilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapierbilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
