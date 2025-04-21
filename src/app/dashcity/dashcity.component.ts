import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CitysComponent } from '../citys/citys.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PropertiesService } from '../Service/properties.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashcity',
  imports: [
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashcity.component.html',
  styleUrl: './dashcity.component.css',
})
export class DashcityComponent {
  cities: any[] = [];
  form: FormGroup;
  show: boolean = false;
  isEditing: boolean = false;
  editingIndex: number = -1;

  constructor(private prop: PropertiesService, private fb: FormBuilder) {
    this.cities = this.prop.citys;
    this.form = this.fb.group({
      img: ['', Validators.required],
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: [''],
    });
  }

  showForm() {
    this.show = !this.show;
  }

  addCity() {
    if (this.form.valid) {
      if (this.isEditing) {
        this.cities[this.editingIndex] = this.form.value;
        this.isEditing = false;
        this.editingIndex = -1;
      } else {
        this.cities.push(this.form.value);
      }
    }
    this.form.reset();
    this.showForm();
  }

  // Agregar método para manejar la imagen
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.form.patchValue({
          img: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  deleteCity(i: number) {
    this.cities.splice(i, 1);
  }

  editCity(i: number) {
    this.isEditing = true;
    this.editingIndex = i;
    const city = this.cities[i];

    this.form.patchValue({
      img: city.img,
      title: city.title,
      text: city.text,
      city: city.city,
    });

    this.showForm();
  }
}

// Add this property to your component class //
