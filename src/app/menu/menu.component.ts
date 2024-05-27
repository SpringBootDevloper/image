import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { MenuserviceService } from '../menuservice.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  menu!: Dish[];

  constructor(private menuService: MenuserviceService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }

}
