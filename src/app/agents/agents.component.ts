import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../Service/login.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Section4Component } from "../section-4/section-4.component";
import { PropertiesService } from '../Service/properties.service';

@Component({
  selector: 'app-agents',
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, FooterComponent, Section4Component],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  cityForm: FormGroup
  show: boolean = false
  cards: any[] = [];
  showDetailsModal: boolean = false;
  selectedAgent: any = null;

  constructor(private fb: FormBuilder, public autentication: LoginService, private  properties: PropertiesService ){
    this.cards = properties.getAgents()
    this.cityForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: ['', Validators.required],
      img: ['', Validators.required],
      age: ['', Validators.required],
      specialty: ['', Validators.required],
      rating: ['', Validators.required],
      properties: ['', Validators.required],
      location: ['', Validators.required],
      contact: ['', Validators.required],
      qualification: ['', Validators.required]
    })
  }




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

  // Add these methods for the details modal
  showDetails(agent: any) {
    this.selectedAgent = agent;
    this.showDetailsModal = true;
  }

  closeDetails() {
    this.showDetailsModal = false;
  }
}

