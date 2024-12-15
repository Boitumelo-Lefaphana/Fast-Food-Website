import { Component, Input } from '@angular/core';
import { FoodItem } from '../../models/food-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="menu-item">
      <img [src]="item.image" [alt]="item.name" class="menu-item-image">
      <div class="menu-item-content">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span class="price">${{ item.price.toFixed(2) }}</span>
      </div>
    </div>
  `,
  styles: [`
    .menu-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .menu-item:hover {
      transform: translateY(-5px);
    }
    .menu-item-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .menu-item-content {
      padding: 1rem;
    }
    .menu-item-content h3 {
      margin: 0;
      color: #333;
      font-size: 1.25rem;
    }
    .menu-item-content p {
      color: #666;
      margin: 0.5rem 0;
    }
    .price {
      display: block;
      color: #e44d26;
      font-weight: bold;
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  `]
})
export class MenuItemComponent {
  @Input() item!: FoodItem;
}