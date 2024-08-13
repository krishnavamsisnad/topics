import { Component, Input } from '@angular/core';
import { Icategories } from '../categories/categories.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-categories.component.html',
  styleUrl: './single-categories.component.css'
})
export class SingleCategoriesComponent {
  @Input() category: Icategories | null = null;
}
