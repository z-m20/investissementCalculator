import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputsComponent } from './user-inputs.component';

describe('UserInputsComponent', () => {
  let component: UserInputsComponent;
  let fixture: ComponentFixture<UserInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
