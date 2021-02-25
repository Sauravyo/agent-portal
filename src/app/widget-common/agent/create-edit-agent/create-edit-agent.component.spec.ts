import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAgentComponent } from './create-edit-agent.component';

describe('CreateEditAgentComponent', () => {
  let component: CreateEditAgentComponent;
  let fixture: ComponentFixture<CreateEditAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
