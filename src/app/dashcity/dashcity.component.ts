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
  citys: any[] = []
  cityForm: FormGroup
  show: boolean = false
  editIndex: number = -1; // Add this to track which city is being edited

  constructor(private properties: PropertiesService, private fb: FormBuilder) {
    
    this.citys = properties.getCitys()
    this.cityForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: ['', Validators.required],
      img: ['', Validators.required]
  
  

  })


}





agregar() {
  if (this.cityForm.valid) {
    if (this.editIndex === -1) {
      // Adding new city
      this.citys.push(this.cityForm.value);
      
      Swal.fire({
        title: '¡Éxito!',
        text: 'La ciudad se agregó correctamente',
        icon: 'success',
        confirmButtonColor: '#591b95'
      });
    } else {
      // Updating existing city
      this.citys[this.editIndex] = this.cityForm.value;
      
      Swal.fire({
        title: '¡Actualizado!',
        text: 'La ciudad se actualizó correctamente',
        icon: 'success',
        confirmButtonColor: '#591b95'
      });
      
      this.editIndex = -1; // Reset edit index
    }
    
    this.cityForm.reset();
    this.show = false;
  } else {
    // Form is invalid, show error message
    Swal.fire({
      title: 'Error',
      text: 'Por favor, llene todos los campos',
      icon: 'error',
      confirmButtonColor: '#591b95'
    });
  }
}

mostrarFormulario(){
  this.show = true
}

close(){
  this.show = false
}


// Add edit method
editCity(index: number) {
  this.editIndex = index;
  const city = this.citys[index];
  
  // Populate form with city data
  this.cityForm.patchValue({
    title: city.title,
    text: city.text,
    city: city.city,
    img: city.img
  });
  
  this.show = true;
}

// Update close method to reset edit mode
closes() {
  this.show = false;
  this.editIndex = -1;
  this.cityForm.reset();
}
imagePreview: string | ArrayBuffer | null = null;

// Add this method to handle file selection
onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    // Update the form control with the file
    this.cityForm.patchValue({
      img: file
    });
    
    // Create a preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}




delete(index?: number) {
  if (index !== undefined) {
    // Remove specific city with animation
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#591b95',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Add animation class to the card before removing
        const cardElement = document.querySelector(`.card-item-${index}`);
        if (cardElement) {
          cardElement.classList.add('card-delete-animation');

          // Wait for animation to complete before removing from array
          setTimeout(() => {
            this.citys.splice(index, 1);
            Swal.fire(
              '¡Eliminado!',
              'La ciudad ha sido eliminada.',
              'success'
            );
          }, 500); // Match this with your animation duration
        }
      }
    });
  } else {
    // Remove last city with animation
    const lastIndex = this.citys.length - 1;
    const cardElement = document.querySelector(`.card-item-${lastIndex}`);

    if (cardElement) {
      cardElement.classList.add('card-delete-animation');

      setTimeout(() => {
        this.citys.pop();
      }, 500);
    }
  }
}

}


// Add this property to your component class





