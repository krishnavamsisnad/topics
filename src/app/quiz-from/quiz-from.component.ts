import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz-from',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './quiz-from.component.html',
  styleUrl: './quiz-from.component.css'
})
export class QuizFromComponent {
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      questions: this.fb.array([])
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }
  getOptions(index: number): FormArray {
    return this.questions.at(index).get('options') as FormArray;
  }


  addQuestion(type: string): void {
    const question = this.fb.group({
      questionText: ['', Validators.required],
      questionType: [type, Validators.required],
      required: [false],
      options: this.fb.array(type === 'choice' ? [this.createOption(), this.createOption()] : []),
      textAnswer: [''] 
    });
    this.questions.push(question);
  }

  createOption(): FormGroup {
    return this.fb.group({
      optionText: ['', Validators.required],
      isCorrect: [false]
    });
  }

  addOption(questionIndex: number): void {
    const options = this.questions.at(questionIndex).get('options') as FormArray;
    options.push(this.createOption());
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  submitQuiz(): void {
    console.log(this.quizForm.value);
  }

  isQuestionTypeDisabled(index: number): boolean {
    const questionType = this.questions.at(index).get('questionType')?.value;
    return questionType === 'text';

  }

}
