import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLoaderComponent } from './child-loader.component';

describe('ChildLoaderComponent', () => {
  let component: ChildLoaderComponent;
  let fixture: ComponentFixture<ChildLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
