import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, NavbarComponent],
=======
import { LoginService } from './Service/login.service';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from "./register/register.component";
import { CitysComponent } from "./citys/citys.component";
import { HouseComponent } from "./house/house.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CitysComponent, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'houseFinder';


  constructor(){}
}
