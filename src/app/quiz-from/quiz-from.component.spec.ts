import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFromComponent } from './quiz-from.component';

describe('QuizFromComponent', () => {
  let component: QuizFromComponent;
  let fixture: ComponentFixture<QuizFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
