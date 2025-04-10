import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../Service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  formLogin: FormGroup;
  constructor(
    private authService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/),
        ],
      ],
    });
  }

  login() {
    if (!this.username.trim() || !this.password.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'El email y la contraseña son obligatorios',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    const result = this.authService.login(this.username, this.password);
    if (!result.success) {
      if (result.message === 'El usuario no existe') {
        Swal.fire({
          title: '¿Eres nuevo?',
          text: 'Regístrate para continuar',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Registrarme',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/register']);
          }
        });
      } else if (result.message === 'Credenciales incorrectas') {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña es incorrecta',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  }
}
