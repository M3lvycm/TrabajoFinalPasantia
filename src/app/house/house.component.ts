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




  house = [
    { title: 'La 27 de febrero', text: 'Av. 27 de Febrero #429, Santo Domingo.', img: '501673-arenas-de-barcelona.webp', nH: "3", mC:'120', nG: '2'  },
    { title: 'U.S.A', text: 'Av. George Washington #1, Santo Domingo.', img: 'About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg', nH: "3", mC:'120', nG: '2' },
    { title: 'Lincoln', text: 'Av. Abraham Lincoln, Santo Domingo.', img: 'K71TBD.webp', nH: "3", mC:'120', nG: '2'  },
    { title: 'San Vicente', text: 'Av. San Vicente de Paúl, Santo Domingo Este.', img: 'photo-1502602898657-3e91760cbb34.jpg', nH: "3", mC:'120', nG: '2'  },

  ]; agregar(){
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