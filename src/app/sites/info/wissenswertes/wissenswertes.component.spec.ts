import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WissenswertesComponent } from './wissenswertes.component';

describe('WissenswertesComponent', () => {
  let component: WissenswertesComponent;
  let fixture: ComponentFixture<WissenswertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WissenswertesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WissenswertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
