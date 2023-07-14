/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReseñasListComponent } from './reseñas-list.component';

describe('ReseñasListComponent', () => {
  let component: ReseñasListComponent;
  let fixture: ComponentFixture<ReseñasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseñasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseñasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
