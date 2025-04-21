import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { PropertiesService } from '../Service/properties.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-dashagents',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SidebarComponent,
    NavbarComponent,
  ],
  templateUrl: './dashagents.component.html',
  styleUrl: './dashagents.component.css',
})
export class DashagentsComponent {
  agents: any[] = [];
  showDetailsModal: boolean = false;
  show: boolean = false;
  selectedAgent: any = null;
  form: FormGroup;
  isEditing: boolean = false;
  editingIndex: number = -1;

  constructor(private prop: PropertiesService, private fb: FormBuilder) {
    this.agents = this.prop.agents;
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      city: [''],
      img: ['', Validators.required],
      age: ['', Validators.required],
      speciality: [''],
      rating: ['', Validators.required],
      properties: ['', Validators.required],
      location: ['', Validators.required],
      contact: ['', Validators.required],
      qualification: ['', Validators.required],
    });
  }

  closeModal() {
    this.showDetailsModal = !this.showDetailsModal;
  }

  showForm() {
    this.show = !this.show;
    this.form.reset();
  }

  showModal(agent: any) {
    this.selectedAgent = agent;
    this.closeModal();
  }

  addAgent() {
    if (this.form.valid) {
      if (this.isEditing) {
        this.agents[this.editingIndex] = this.form.value;
        this.isEditing = false;
        this.editingIndex = -1;
      } else {
        this.agents.push(this.form.value);
      }
      this.form.reset();
      this.showForm();
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.form.patchValue({
          img: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  deleteAgent(i: number) {
    this.agents.splice(i, 1);
  }

  editAgent(i: number) {
    this.isEditing = true;
    this.showForm();
    this.editingIndex = i;
    const agent = this.agents[i];

    this.form.patchValue({
      title: agent.title,
      text: agent.text,
      city: agent.city,
      img: agent.img,
      age: agent.age,
      speciality: agent.speciality,
      rating: agent.rating,
      properties: agent.properties,
      location: agent.location,
      contact: agent.contact,
      qualification: agent.qualification,
    });
  }
}
