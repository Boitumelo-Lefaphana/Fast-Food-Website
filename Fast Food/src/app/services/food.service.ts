import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private menuItems: FoodItem[] = [
    {
      id: 1,
      name: 'Fat Cake',
      price: 2.99,
      description: 'Delicious deep-fried pastry filled with sweet jam',
      image: 'https://picsum.photos/200',
      category: 'Pastries'
    },
    {
      id: 2,
      name: 'Chips',
      price: 3.49,
      description: 'Crispy golden fries seasoned to perfection',
      image: 'https://picsum.photos/201',
      category: 'Sides'
    },
    {
      id: 3,
      name: 'Burger',
      price: 5.99,
      description: 'Juicy beef patty with fresh lettuce and tomato',
      image: 'https://picsum.photos/202',
      category: 'Main'
    },
    {
      id: 4,
      name: 'Chicken Wings',
      price: 7.99,
      description: 'Spicy chicken wings with special sauce',
      image: 'https://picsum.photos/203',
      category: 'Main'
    }
  ];

  getMenuItems(): FoodItem[] {
    return this.menuItems;
  }

  getItemsByCategory(category: string): FoodItem[] {
    return this.menuItems.filter(item => item.category === category);
  }
}