import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chosethecorectansers',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './chosethecorectansers.component.html',
  styleUrl: './chosethecorectansers.component.css'
})
export class ChosethecorectansersComponent {
  quizForm: FormGroup;
  submissionStatus: string | null = null;

  // Options for multiple-choice questions
  componentOptions = [
    'A building block of Angular applications that encapsulates HTML, CSS, and logic.',
    'A template engine used in Angular.',
    'A type of Angular service.',
    'A routing module in Angular.'
  ];

  usageOptions = [
    'Building mobile applications.',
    'Creating web applications.',
    'Developing server-side applications.',
    'Managing databases.'
  ];

  ngForOptions = [
    'Iterating over a list of items in Angular templates.',
    'Displaying a single item in Angular templates.',
    'Binding data to HTML elements.',
    'Handling form submissions.'
  ];

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      addition: ['', Validators.required],
      componentDefinition: ['', Validators.required],
      angularUsage: ['', Validators.required],
      squareRoot: ['', Validators.required],
      ngForUsage: ['', Validators.required],
      clickEvents: ['', Validators.required],
      introductionYear: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.quizForm.valid) {
      const answers = this.quizForm.value;

      // Correct answers
      const correctAnswers:any = {
        addition: 10, // Example: Assuming the addition of 2 and 8
        componentDefinition: 'A building block of Angular applications that encapsulates HTML, CSS, and logic.',
        angularUsage: 'Creating web applications.',
        squareRoot: 8,
        ngForUsage: 'Iterating over a list of items in Angular templates.',
        clickEvents: 'Click events are used to handle user interactions with buttons or other clickable elements.',
        introductionYear: 2010 // AngularJS was introduced in 2010
      };

      let allCorrect = true;

      for (const key in correctAnswers) {
        if (correctAnswers[key] !== this.quizForm.get(key)?.value) {
          allCorrect = false;
          break;
        }
      }

      this.submissionStatus = allCorrect ? 'All answers are correct!' : 'Some answers are incorrect. Please review.';
    } else {
      this.submissionStatus = 'Please fill out all fields.';
    }
  }

}
