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
  form: FormGroup;
  houses: any[] = [];
  imagePreview: string | null = null;
  isEditing: boolean = false;
  editingIndex: number = -1;

  constructor (private prop : PropertiesService, private fb: FormBuilder) { 
    this.houses = this.prop.houses
    this.form = this.fb.group({
      img: ['',],
      title: ['', Validators.required],
      city: ['', Validators.required],
      descrip: ['', Validators.required],
      nH: ['', Validators.required],
      mC: ['', Validators.required],
      nG: ['', Validators.required],
    });
  }

  //Funcion para mostrar la imagen de la casa en el formulario
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.form.patchValue({
          img: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  addHouse() {
    if (this.form.valid) {
      if (this.isEditing) {
        this.prop.updateHouse(this.editingIndex, this.form.value);
        this.isEditing = false;
        this.editingIndex = -1;
      } else {
        this.prop.addHouse(this.form.value);
      }
      this.form.reset();
      this.imagePreview = null;
    }
  }

  deleteHouse(i:number) {
    this.prop.deleteHouse(i)
  }

  editHouses(i: number) {
    this.isEditing = true;
    this.editingIndex = i;
    const house = this.houses[i];
  
    this.form.setValue({
      img: house.img,
      title: house.title,
      city: house.city,
      descrip: house.descrip,
      nH: house.nH,
      mC: house.mC,
      nG: house.nG
    });
    
    this.imagePreview = house.img;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = -1;
    this.form.reset();
    this.imagePreview = null;
  }


}
