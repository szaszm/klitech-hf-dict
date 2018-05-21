import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LexicalEntryComponent } from './lexical-entry.component';

describe('LexicalEntryComponent', () => {
  let component: LexicalEntryComponent;
  let fixture: ComponentFixture<LexicalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexicalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexicalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
