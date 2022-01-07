import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForToForComponent } from './for-to-for.component';

describe('ForToForComponent', () => {
  let component: ForToForComponent;
  let fixture: ComponentFixture<ForToForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForToForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForToForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
