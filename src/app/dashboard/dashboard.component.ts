import { Component } from '@angular/core';
import { PropertiesService } from '../Service/properties.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, FilterPipe, FormsModule, RouterModule ]
})
export class DashboardComponent {
  houses: any[] = [];
  houseForm: FormGroup;
  editIndex: number = -1;

  constructor(
    private propertiesService: PropertiesService,
    private fb: FormBuilder,
  ) {
    this.houses = this.propertiesService.getHouses();

    this.houseForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      img: ['', Validators.required],
      nH: ['', Validators.required],
      mC: ['', Validators.required],
      nG: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  // Método para agregar una nueva propiedad
  addHouse() {
    if (this.houseForm.valid) {
      if (this.editIndex === -1) {
        // Agregar nueva propiedad
        this.propertiesService.addHouse(this.houseForm.value);
      } else {
        // Actualizar propiedad existente
        this.propertiesService.updateHouse(this.editIndex, this.houseForm.value);
        this.editIndex = -1;
      }

      // Actualizar la lista local
      this.houses = this.propertiesService.getHouses();

      // Resetear el formulario
      this.houseForm.reset();
    }
  }

  // Método para editar una propiedad existente
  editHouse(index: number) {
    const house = this.houses[index];
    this.houseForm.setValue({
      title: house.title,
      text: house.text,
      img: house.img,
      nH: house.nH,
      mC: house.mC,
      nG: house.nG,
      city: house.city
    });
    this.editIndex = index;
  }

  // Método para eliminar una propiedad
  deleteHouse(index: number) {
    this.propertiesService.deleteHouse(index);
    this.houses = this.propertiesService.getHouses();
  }

  // Método para cancelar la edición
  cancelEdit() {
    this.houseForm.reset();
    this.editIndex = -1;
  }

  // Add these properties to your component class
  searchTerm: string = '';
  imagePreview: string | ArrayBuffer | null = null;

  // Add this method to your component class
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Update the form control with the file name
      this.houseForm.patchValue({
        img: file.name
      });

      // Create a preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


}