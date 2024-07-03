import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestissementResultComponent } from './investissement-result.component';

describe('InvestissementResultComponent', () => {
  let component: InvestissementResultComponent;
  let fixture: ComponentFixture<InvestissementResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestissementResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestissementResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
