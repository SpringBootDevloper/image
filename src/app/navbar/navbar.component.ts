import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToContact(){
    console.log("abc")
    this.router.navigate(['/contact']);
  }
}
