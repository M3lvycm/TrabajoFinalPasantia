import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PropertiesService } from '../Service/properties.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-dashagents',
  imports: [ReactiveFormsModule, CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './dashagents.component.html',
  styleUrl: './dashagents.component.css'
})
export class DashagentsComponent {
 
}