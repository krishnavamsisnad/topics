export  interface FormField {
    label: string;
    controlName: string;
    type: 'text' | 'select';
    options?: string[]; 
  }
  