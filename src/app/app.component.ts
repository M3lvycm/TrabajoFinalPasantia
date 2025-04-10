import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CitysComponent } from "./citys/citys.component";
import { HouseComponent } from './house/house.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CitysComponent,HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'houseFinder';


  constructor(){}
}
