import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMetComponent } from './api-met.component';

describe('ApiMetComponent', () => {
  let component: ApiMetComponent;
  let fixture: ComponentFixture<ApiMetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiMetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
