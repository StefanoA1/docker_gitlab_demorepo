import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSelectedComponent } from './questions-selected.component';

describe('QuestionsSelectedComponent', () => {
  let component: QuestionsSelectedComponent;
  let fixture: ComponentFixture<QuestionsSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
