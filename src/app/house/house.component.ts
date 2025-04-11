import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../Service/login.service';

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

  constructor(private fb: FormBuilder, public autenticador: LoginService){
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


  @Input()house:any = ""

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
