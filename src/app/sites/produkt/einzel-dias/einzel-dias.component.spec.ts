import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelDiasComponent } from './einzel-dias.component';

describe('EinzelDiasComponent', () => {
  let component: EinzelDiasComponent;
  let fixture: ComponentFixture<EinzelDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EinzelDiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinzelDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
