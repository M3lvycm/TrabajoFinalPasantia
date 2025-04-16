import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PropertiesService } from '../Service/properties.service';
import { HouseComponent } from "../house/house.component";

@Component({
  selector: 'app-modulo-o',
  imports: [NavbarComponent, SidebarComponent, HouseComponent],
  templateUrl: './modulo-o.component.html',
  styleUrl: './modulo-o.component.css'
})
export class ModuloOComponent {
citys: any[] = []
house: any[] = []
agents: any[] = []
  constructor(private propertiesService: PropertiesService) {
   this.house =  propertiesService.getHouses()
   this.citys =  propertiesService.getCitys()
   this.agents = propertiesService.getAgents()

  }
}
