import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailViewComponent } from './form-detail-view.component';

describe('FormDetailViewComponent', () => {
  let component: FormDetailViewComponent;
  let fixture: ComponentFixture<FormDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
