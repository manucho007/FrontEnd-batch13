import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactesComponent } from './charactes.component';

describe('CharactesComponent', () => {
  let component: CharactesComponent;
  let fixture: ComponentFixture<CharactesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
