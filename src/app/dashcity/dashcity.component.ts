import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CitysComponent } from "../citys/citys.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PropertiesService } from '../Service/properties.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashcity',
  imports: [NavbarComponent,  SidebarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './dashcity.component.html',
  styleUrl: './dashcity.component.css'
})
export class DashcityComponent {

}


// Add this property to your component class





