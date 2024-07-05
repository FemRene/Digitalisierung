import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalisierungComponent } from './digitalisierung.component';

describe('DigitalisierungComponent', () => {
  let component: DigitalisierungComponent;
  let fixture: ComponentFixture<DigitalisierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalisierungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalisierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
