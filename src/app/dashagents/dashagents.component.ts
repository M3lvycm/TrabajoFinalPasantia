import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PropertiesService } from '../Service/properties.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-dashagents',
  imports: [ReactiveFormsModule, CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './dashagents.component.html',
  styleUrl: './dashagents.component.css'
})
export class DashagentsComponent {
  cityForm: FormGroup;
  show: boolean = false;
  cards: any[] = [];
  showDetailsModal: boolean = false;
  selectedAgent: any = null;
  editIndex: number = -1;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder, public autentication: LoginService, private properties: PropertiesService) {
    this.cards = properties.getAgents();
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
    });
  }

  agregar() {
    if (this.cityForm.valid) {
      if (this.editIndex >= 0) {
        // Update existing agent
        this.cards[this.editIndex] = this.cityForm.value;
        
        Swal.fire({
          title: '¡Actualizado!',
          text: 'El agente se actualizó correctamente',
          icon: 'success',
          confirmButtonColor: '#591b95'
        });
        
        this.editIndex = -1;
      } else {
        // Add new agent
        this.cards.push(this.cityForm.value);
        
        Swal.fire({
          title: '¡Éxito!',
          text: 'El agente se agregó correctamente',
          icon: 'success',
          confirmButtonColor: '#591b95'
        });
      }
      
      this.cityForm.reset();
      this.show = false;
      this.imagePreview = null;
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

  mostrarFormulario() {
    this.show = true;
    this.editIndex = -1;
    this.cityForm.reset();
    this.imagePreview = null;
  }

  close() {
    this.show = false;
    this.editIndex = -1;
    this.cityForm.reset();
    this.imagePreview = null;
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
                'El agente ha sido eliminado.',
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

  editAgent(index: number) {
    this.show = true;
    this.editIndex = index;
    const agent = this.cards[index];
    
    // Populate the form with the agent's data
    this.cityForm.patchValue({
      title: agent.title,
      text: agent.text,
      city: agent.city,
      img: '',  // Can't set file input value for security reasons
      age: agent.age,
      specialty: agent.specialty,
      rating: agent.rating,
      properties: agent.properties,
      location: agent.location,
      contact: agent.contact,
      qualification: agent.qualification
    });
    
    // Set image preview if available
    this.imagePreview = agent.img;
  }
  
  deleteAgent(index: number) {
    // Use SweetAlert instead of confirm for consistency
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
              'El agente ha sido eliminado.',
              'success'
            );
          }, 500);
        } else {
          this.cards.splice(index, 1);
          Swal.fire(
            '¡Eliminado!',
            'El agente ha sido eliminado.',
            'success'
          );
        }
      }
    });
  }
}