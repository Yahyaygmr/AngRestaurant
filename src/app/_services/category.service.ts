import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:7012/api/Categories/';

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl);
  }
  getById(id: number) {
    return this.http.get<Category[]>(this.baseUrl + id);
  }
  create(category: Category) {
    return this.http.post(this.baseUrl, category);
  }
  update(id: number, category: Category) {
    return this.http.put(this.baseUrl + id, category);
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
