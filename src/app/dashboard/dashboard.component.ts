import { Component } from '@angular/core';
import { PropertiesService } from '../Service/properties.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, FilterPipe, FormsModule, RouterModule, SidebarComponent]
})
export class DashboardComponent {
  houses: any[] = [];
  houseForm: FormGroup;
  editIndex: number = -1;

  // Add this property

  constructor(
    private propertiesService: PropertiesService,
    private fb: FormBuilder
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
  // Update your onFileSelected method
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Create a FileReader to read the image as a data URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the preview image
        this.imagePreview = e.target.result;

        // Store the image data in the form
        this.houseForm.patchValue({
          img: e.target.result
        });

        // Mark the form control as touched to trigger validation
        this.houseForm.get('img')?.markAsTouched();
      };
      reader.readAsDataURL(file);
    }
  }


}
