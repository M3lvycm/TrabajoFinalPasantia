import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Service/properties.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, FilterPipe, FormsModule, SidebarComponent]
})
export class DashboardComponent implements OnInit {
  houses: any[] = [];
  houseForm: FormGroup;
  editIndex: number = -1;
  editId: string = '';
  searchTerm: string = '';
  imagePreview: string | ArrayBuffer | null = null;
  isLoading: boolean = false;

  constructor(
    private propertiesService: PropertiesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.houseForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      banos: [0, [Validators.required, Validators.min(0)]],
      habitaciones: [0, [Validators.required, Validators.min(0)]],
      garajes: [0, [Validators.required, Validators.min(0)]],
      amueblado: [false, Validators.required],
      ciudad: ['', Validators.required],
      metrosCuadrados: [0, [Validators.required, Validators.min(0)]],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  ngOnInit(): void {
    this.fetchProperty();
  }

  fetchProperty(): void {
    this.isLoading = true;
    this.propertiesService.getPropertys().subscribe(
      (data) => {
        this.houses = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching properties:', error);
        this.isLoading = false;
      }
    );
  }

  addOrUpdateHouse(): void {
    if (this.houseForm.invalid) return;

    const currentTime = new Date().toISOString();
    this.houseForm.patchValue({ updatedAt: currentTime });

    if (this.editIndex === -1) {
      // Agregar nueva propiedad
      this.houseForm.patchValue({ createdAt: currentTime });
      this.propertiesService.postPropertys(this.houseForm.value).subscribe(
        (response) => {
          this.houses.push(response);
          this.houseForm.reset();
          this.imagePreview = null;
          this.fetchProperty();
        },
        (error) => console.error('Error al agregar la propiedad:', error)
      );
    } else {
      // Editar propiedad existente
      const updatedHouse = this.houseForm.value;
      const id = this.editId;

      this.propertiesService.updateProperty(id, updatedHouse).subscribe(
        (response) => {
          this.fetchProperty();
          this.houseForm.reset();
          this.imagePreview = null;
          this.editIndex = -1;
          this.editId = '';
        },
        (error) => console.error('Error al actualizar la propiedad:', error)
      );
    }
  }

  editHouse(index: number): void {
    const house = this.houses[index];
    this.editIndex = index;
    this.editId = house._id || house.id; // Asegúrate de usar el campo correcto de tu backend

    this.houseForm.patchValue({
      titulo: house.titulo || house.title,
      descripcion: house.descripcion || house.text,
      imagen: house.imagen || house.img,
      banos: house.banos || 0,
      habitaciones: house.habitaciones || 0,
      garajes: house.garajes || 0,
      amueblado: house.amueblado || false,
      ciudad: house.ciudad || '',
      metrosCuadrados: house.metrosCuadrados || 0,
      createdAt: house.createdAt || '',
      updatedAt: new Date().toISOString()
    });

    this.imagePreview = house.imagen || house.img || null;
  }

  cancelEdit(): void {
    this.houseForm.reset();
    this.imagePreview = null;
    this.editIndex = -1;
    this.editId = '';
  }

  deleteHouse(index: number): void {
    const house = this.houses[index];
    const id = house._id || house.id;
    if (!id) {
      console.error('No se pudo obtener el ID de la propiedad para eliminar');
      return;
    }

    this.propertiesService.deleteHouse(id).subscribe(
      () => {
        this.houses.splice(index, 1);
      },
      (error) => {
        console.error('Error al eliminar la propiedad:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.houseForm.patchValue({ imagen: e.target.result });
        this.houseForm.get('imagen')?.markAsTouched();
      };
      reader.readAsDataURL(file);
    }
  }
}
