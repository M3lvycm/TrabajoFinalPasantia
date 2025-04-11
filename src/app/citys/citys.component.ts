import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-citys',
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './citys.component.html',
  styleUrl: './citys.component.css'
})
export class CitysComponent {
  cityForm: FormGroup

  show: boolean = false
  constructor(private fb: FormBuilder){

    this.cityForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: ['', Validators.required],
      img: ['', Validators.required]
    })

  }


  cards = [
    { title: 'España', text: 'España es un país maravilloso conocido por su rica historia, arquitectura impresionante y una gastronomía excepcional como la paella y las tapas.', img: '501673-arenas-de-barcelona.webp' },
    { title: 'U.S.A', text: 'Estados Unidos es una nación diversa y dinámica, famosa por su influencia cultural, tecnológica y paisajes icónicos como el Gran Cañón y la Estatua de la Libertad.', img: 'About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg' },
    { title: 'Suiza', text: 'Suiza es conocida por sus paisajes alpinos, relojes de precisión, chocolates deliciosos y una calidad de vida envidiable.', img: 'K71TBD.webp' },
    { title: 'Francia', text: 'Francia es sinónimo de elegancia, arte y romanticismo. Su capital, París, es mundialmente conocida por la Torre Eiffel, el Louvre y su exquisita cocina.', img: 'photo-1502602898657-3e91760cbb34.jpg' },
  ];


  agregar(){
    if(this.cityForm.valid){
      // Form is valid, add the city
      this.cards.push(this.cityForm.value);
      this.cityForm.reset();
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
      if (index !== undefined) {
        // Remove specific card with animation
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
                this.cards.splice(index, 1);
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
        // Remove last card with animation
        const lastIndex = this.cards.length - 1;
        const cardElement = document.querySelector(`.card-item-${lastIndex}`);

        if (cardElement) {
          cardElement.classList.add('card-delete-animation');

          setTimeout(() => {
            this.cards.pop();
          }, 500);
        }
      }
    }
}