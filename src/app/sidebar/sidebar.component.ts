import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { PropertiesService } from '../Service/properties.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {
  house: any[] = []
  activeModule: string = 'dashboard';

  constructor(public loginService: LoginService, public properties: PropertiesService){

    this.house = this.properties.getHouses()
  }

    // Add this method
    setActiveModule(module: string): void {
      this.activeModule = module;
    }




}
