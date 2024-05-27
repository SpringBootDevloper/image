import { Injectable } from '@angular/core';
import { Dish } from './Dish';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  private menu: Dish[] = [
    {
      name: 'Paneer Butter Masala',
      category: 'Veg',
      description: 'Delicious paneer in buttery gravy',
      price: 200,
      imageUrl: '../assets/1.jpg'
    },
    {
      name: 'Chicken Curry',
      category: 'Non-Veg',
      description: 'Spicy chicken curry',
      price: 250,
      imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f'
    },
    {
      name: 'Veg Biryani',
      category: 'Veg',
      description: 'Flavorful vegetable biryani',
      price: 180,
      imageUrl: 'https://images.unsplash.com/photo-1627308595509-2c6e07d56b8e'
    },
    {
      name: 'Mutton Rogan Josh',
      category: 'Non-Veg',
      description: 'Tender mutton in rich gravy',
      price: 300,
      imageUrl: 'https://images.unsplash.com/photo-1608897013035-2a4e3c12f9f3'
    },
    {
      name: 'Chole Bhature',
      category: 'Veg',
      description: 'Spicy chickpeas with fried bread',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1601050699894-0c36005a2e15'
    },
    {
      name: 'Fish Fry',
      category: 'Non-Veg',
      description: 'Crispy fried fish',
      price: 220,
      imageUrl: 'https://images.unsplash.com/photo-1553177597-0cdf29b3b29e'
    },
    {
      name: 'Mixed Veg Curry',
      category: 'Veg',
      description: 'Mixed vegetables in a rich curry',
      price: 170,
      imageUrl: 'https://images.unsplash.com/photo-1562967916-eb82221dfb1b'
    },
    {
      name: 'Butter Chicken',
      category: 'Non-Veg',
      description: 'Chicken cooked in creamy tomato gravy',
      price: 260,
      imageUrl: 'https://images.unsplash.com/photo-1617110065488-881d12bc3a33'
    }
  ];

  constructor() { }

  getMenu(): Dish[] {
    return this.menu;
  }
}
