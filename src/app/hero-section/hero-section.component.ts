import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Section4Component } from "../section-4/section-4.component";
import { HouseComponent } from "../house/house.component";
import { CitysComponent } from "../citys/citys.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AgentsComponent } from "../agents/agents.component";

@Component({
  selector: 'app-hero-section',
  imports: [FooterComponent, Section4Component, HouseComponent, CitysComponent, NavbarComponent, AgentsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
