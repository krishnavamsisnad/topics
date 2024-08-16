import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-childcompounent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childcompounent.component.html',
  styleUrl: './childcompounent.component.css'
})
export class ChildcompounentComponent {
  isTemplateA:boolean=true
  name:boolean=false
  }
