import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulishedPORSComponent } from './pulished-pors.component';

describe('PulishedPORSComponent', () => {
  let component: PulishedPORSComponent;
  let fixture: ComponentFixture<PulishedPORSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulishedPORSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulishedPORSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
