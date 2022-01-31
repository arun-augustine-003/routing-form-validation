import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private router: Router) {}
  log(x) {
    console.log(x);
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
