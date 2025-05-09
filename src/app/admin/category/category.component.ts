import { Component } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categoryList: Category[];

  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (values) => (this.categoryList = values),
      error: (err) => console.log(err),
    });
  }
}
