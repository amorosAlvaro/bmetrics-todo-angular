import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponentComponent } from './task-card-component.component';

describe('TaskCardComponentComponent', () => {
  let component: TaskCardComponentComponent;
  let fixture: ComponentFixture<TaskCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
