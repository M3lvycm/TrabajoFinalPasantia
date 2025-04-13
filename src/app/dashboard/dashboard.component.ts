import { Component } from '@angular/core';
import { PropertiesService } from '../Service/properties.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule]
})
export class DashboardComponent {
  houses: any[] = [];
  houseForm: FormGroup;
  editIndex: number = -1;

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
}
