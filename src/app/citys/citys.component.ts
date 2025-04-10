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
    { title: 'La 27 de febrero', text: 'Av. 27 de Febrero #429, Santo Domingo.', img: '501673-arenas-de-barcelona.webp',  },
    { title: 'U.S.A', text: 'Av. George Washington #1, Santo Domingo.', img: 'About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg',  },
    { title: 'Lincoln', text: 'Av. Abraham Lincoln, Santo Domingo.', img: 'K71TBD.webp',  },
    { title: 'San Vicente', text: 'Av. San Vicente de Paúl, Santo Domingo Este.', img: 'photo-1502602898657-3e91760cbb34.jpg',  },
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