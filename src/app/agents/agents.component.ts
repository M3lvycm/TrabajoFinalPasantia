import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agents',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  cityForm: FormGroup
  show: boolean = false

  // Add these properties for the details modal
  showDetailsModal: boolean = false;
  selectedAgent: any = null;

  constructor(private fb: FormBuilder){

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


  cards = [
    {
      title: 'Carlos Garcia',
      text: 'Especialista en propiedades de lujo con 15 años de experiencia. Reconocido por su excelente servicio al cliente y conocimiento del mercado inmobiliario de alto nivel.',
      img: 'Carlos.png',
      age: '42',
      specialty: 'Propiedades de lujo',
      rating: '4.9',
      properties: '78',
      location: 'Madrid, España',
      contact: '+34 612 345 678',
      propertiesSold: '78',
      qualification: 'Licenciado en Administración de Empresas'
    },
    {
      title: 'María González',
      text: 'Experta en bienes raíces residenciales con certificación en negociación avanzada. Ayuda a familias a encontrar el hogar perfecto con un enfoque personalizado.',
      img: 'maria.jpg',
      age: '35',
      specialty: 'Residencial',
      rating: '4.8',
      properties: '124',
      location: 'Barcelona, España',
      contact: '+34 623 456 789',
      propertiesSold: '124',
      qualification: 'Máster en Marketing Inmobiliario'
    },
    {
      title: 'Juan Pérez',
      text: 'Asesor inmobiliario especializado en propiedades comerciales e inversiones. Con formación en finanzas, ofrece análisis detallados para maximizar el retorno de inversión.',
      img: 'juan.avif',
      age: '38',
      specialty: 'Comercial',
      rating: '4.7',
      properties: '56',
      location: 'Valencia, España',
      contact: '+34 634 567 890',
      propertiesSold: '56',
      qualification: 'Licenciado en Economía'
    },
    {
      title: 'Alma Gozo',
      text: 'Consultora inmobiliaria con enfoque en desarrollo de proyectos y propiedades en zonas exclusivas. Conocida por su atención al detalle y servicio personalizado.',
      img: 'Alma.jpg',
      age: '40',
      specialty: 'Desarrollo',
      rating: '4.9',
      properties: '92',
      location: 'Sevilla, España',
      contact: '+34 645 678 901',
      propertiesSold: '92',
      qualification: 'Arquitecta e Ingeniera Civil'
    },
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

  // Add these methods for the details modal
  showDetails(agent: any) {
    this.selectedAgent = agent;
    this.showDetailsModal = true;
  }

  closeDetails() {
    this.showDetailsModal = false;
  }
}

