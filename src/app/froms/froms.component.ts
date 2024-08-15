import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StringDecoder } from 'string_decoder';
import { FormField } from './model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './froms.component.html',
  styleUrl: './froms.component.css'
})
export class FromsComponent {
  form: FormGroup;
  formFields:FormField[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fields: this.fb.array([])
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray
  }

  addField() {
    const newField:FormField = {
      label: 'New Field',
      controlName: `field${this.fields.length}`,
      type: 'text',  
      options:[]    
    };

    this.formFields.push(newField);
    this.fields.push(new FormControl(''));
  }

  removeField(index: number) {
    this.formFields.splice(index, 1);
    this.fields.removeAt(index);
  }

  previewForm() {
    console.log(this.form.value);
  }


}
