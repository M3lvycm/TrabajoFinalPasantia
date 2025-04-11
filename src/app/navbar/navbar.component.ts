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


  constructor(public loginService: LoginService) { }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    



    }




  }



}
