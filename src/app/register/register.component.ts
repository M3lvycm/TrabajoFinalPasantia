import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  formRegister: FormGroup
  constructor(private authService: LoginService, private router: Router, private fb: FormBuilder) {

    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/)]],
     confirmPassword: ['', [Validators.required]],

    })

  }




  register() {
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    if (this.formRegister.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }


    if (this.authService.register(this.username, this.password)) {
      Swal.fire({
        title: 'Usuario registrado',
        text: 'Usuario registrado exitosamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      this.router.navigate(['/inicio']);
    }
  }

}
