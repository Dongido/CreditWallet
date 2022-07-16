import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteActionComponent } from './incomplete-action.component';

describe('IncompleteActionComponent', () => {
  let component: IncompleteActionComponent;
  let fixture: ComponentFixture<IncompleteActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompleteActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
