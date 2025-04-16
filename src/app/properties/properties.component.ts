import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HouseComponent } from "../house/house.component";
import { Section4Component } from "../section-4/section-4.component";
import { FooterComponent } from "../footer/footer.component";
import { PropertiesService } from "../Service/properties.service";

@Component({
  selector: 'app-properties',
  imports: [NavbarComponent, HouseComponent, Section4Component, FooterComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  houses: any[] = [];

  constructor(private propertiesService: PropertiesService) {
    this.houses = this.propertiesService.getHouses();
  }
}
