import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVDComponent } from './dvd.component';

describe('DVDComponent', () => {
  let component: DVDComponent;
  let fixture: ComponentFixture<DVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
