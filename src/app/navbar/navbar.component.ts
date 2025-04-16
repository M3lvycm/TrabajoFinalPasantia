import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   Validator: boolean = false
  constructor(public loginService: LoginService) {
    this.Validator = loginService.isAuthenticated()
   }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });




    }




  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      if (this.isMobileMenuOpen) {
        menuToggle.classList.add('active');
      } else {
        menuToggle.classList.remove('active');
      }
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.classList.remove('active');
    }
  }

}
