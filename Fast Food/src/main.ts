import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './app/components/menu-item/menu-item.component';
import { FoodService } from './app/services/food.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  template: `
    <div class="header">
      <div class="container">
        <h1>Tasty Bites Fast Food</h1>
      </div>
    </div>
    
    <div class="container">
      <section *ngFor="let category of categories">
        <h2 class="category-title">{{ category }}</h2>
        <div class="menu-grid">
          <app-menu-item
            *ngFor="let item of getItemsByCategory(category)"
            [item]="item"
          ></app-menu-item>
        </div>
      </section>
    </div>
  `
})
export class App {
  categories = ['Main', 'Sides', 'Pastries'];
  
  constructor(private foodService: FoodService) {}

  getItemsByCategory(category: string) {
    return this.foodService.getItemsByCategory(category);
  }
}

bootstrapApplication(App);