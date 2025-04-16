import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HouseComponent } from "../house/house.component";
import { Section4Component } from "../section-4/section-4.component";
import { FooterComponent } from "../footer/footer.component";
import { PropertiesService } from "../Service/properties.service";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [NavbarComponent, Section4Component, FooterComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  houses: any[] = [];
  filteredHouses: any[] = [];
  cities: string[] = [];
  show: boolean = false;
  showDetailsModal: boolean = false;
  selectedHouse: any = null;

  // Filter variables
  selectedCity: string = '';
  selectedBedrooms: string = '';
  minArea: number | null = null;

  constructor(private propertiesService: PropertiesService) {
    this.houses = this.propertiesService.getHouses();
    this.filteredHouses = [...this.houses];

    // Extract unique cities for the filter dropdown
    this.cities = [...new Set(this.houses.map(house => house.city))];
  }

  filterProperties() {
    this.filteredHouses = this.houses.filter(house => {
      // Filter by city
      if (this.selectedCity && house.city !== this.selectedCity) {
        return false;
      }

      // Filter by bedrooms
      if (this.selectedBedrooms && parseInt(house.nH) < parseInt(this.selectedBedrooms)) {
        return false;
      }

      // Filter by minimum area
      if (this.minArea && parseInt(house.mC) < this.minArea) {
        return false;
      }

      return true;
    });
  }

  resetFilters() {
    this.selectedCity = '';
    this.selectedBedrooms = '';
    this.minArea = null;
    this.filteredHouses = [...this.houses];
  }

  mostrarFormulario() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  showDetails(house: any) {
    this.selectedHouse = house;
    this.showDetailsModal = true;
  }

  closeDetails() {
    this.showDetailsModal = false;
  }
}
