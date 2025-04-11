import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-house',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {

  houseForm: FormGroup
  show: boolean = false
  // Add these properties inside the class
  showDetailsModal: boolean = false;
  selectedHouse: any = null;

  constructor(private fb: FormBuilder){
    this.houseForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: ['', Validators.required],
      img: ['', Validators.required],
      nH: ['', Validators.required],
      nG: ['', Validators.required],
      mC: ['', Validators.required]
    })
  }

  // Add these methods inside the class
  showDetails(house: any) {
    this.selectedHouse = house;
    this.showDetailsModal = true;
  }

  closeDetails() {
    this.showDetailsModal = false;
  }

  house = [
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'Hespaña.webp', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Apartamento en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'Husa.jpg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
    { title: 'Chalet en Suiza', text: 'Lujoso chalet en los Alpes suizos, Zermatt.', img: 'Csuiza.jpg', nH: "5", mC:'200', nG: '3', city: 'Zermatt'  },
    { title: 'Villa en Francia', text: 'Elegante villa en la Provenza francesa.', img: 'Cfrancia.jpg', nH: "4", mC:'180', nG: '2', city: 'Provenza'  },
  ]; 
  
  agregar(){
    if(this.houseForm.valid){
      // Form is valid, add the city
      this.house.push(this.houseForm.value);
      this.houseForm.reset();
      this.show = false;

      // Show success message
      Swal.fire({
        title: '¡Éxito!',
        text: 'La ciudad se agregó correctamente',
        icon: 'success',
        confirmButtonColor: '#591b95'
      });
    } else {
      // Form is invalid, show error message
      Swal.fire({
        title: 'Error',
        text: 'Por favor, llene todos los campos',
        icon: 'error',
        confirmButtonColor: '#591b95'
      });

   ;
    }
  }

  mostrarFormulario(){
    this.show = true
  }

  close(){
    this.show = false
  }

  delete(index?: number) {
      // Mostrar diálogo de confirmación
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
          // Si el usuario confirma, eliminar la propiedad

            // Eliminar una propiedad específica

            // Eliminar la última propiedad
            this.house.pop();
               // Mostrar mensaje de éxito
          Swal.fire(
            '¡Eliminado!',
            'La propiedad ha sido eliminada.',
            'success'
          );
          } else{
            Swal.fire(
              'Cancelado',
              'La propiedad no ha sido eliminada.',
              'error'
            );
          }




        }
      );
    }




}