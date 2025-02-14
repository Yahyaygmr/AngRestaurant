import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:7012/api/Categories';

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl);
  }
}
