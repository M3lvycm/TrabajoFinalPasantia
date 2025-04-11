import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { routes } from '../app.routes';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})



export class LoginService {
  User = {
    email: '',
    password: ''
  };


  private users: { email: string, password: string }[] = [

  ];

  constructor(private router: Router) { }

  login(email: string, password: string): { success: boolean, message?: string } {
    email = email.trim().toLowerCase();
    password = password.trim();

    // Validación de campos vacíos
    if (!email || !password) {
      return { success: false, message: 'El email y la contraseña son obligatorios' };
    }

    const user = this.users.find(user => user.email === email);

    if (!user) {
      return { success: false, message: 'El usuario no existe' }; // Usuario no existe
    }

    if (user.password !== password) {
      return { success: false, message: 'Credenciales incorrectas' }; // Contraseña incorrecta
    }
    else {
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });
    }

    localStorage.setItem('user', email);
    this.router.navigate(['/home']);
    return { success: true };
  }



  register(email: string, password: string): boolean {
    email = email.trim().toLowerCase();
    password = password.trim();

    if (!email || !password) {
      Swal.fire({
        title: 'Error',
        text: 'El email y la contraseña son obligatorios',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }

    if (this.users.some(user => user.email === email)) {
      Swal.fire({
        title: 'Error',
        text: 'El usuario ya existe',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    // if (password.length < 5 ) {
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'La contraseña debe tener al menos 5 caracteres',
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar'
    //   });
    //   return false;
    // }
    // if (!/[A-Z]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'La contraseña debe contener al menos una letra mayúscula',
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar',
    //   });
    //   return false;
    // }



    // if (!/[0-9]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'La contraseña debe contener al menos un número',
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar',
    //   });
    //   return false;
    // }

    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'La contraseña debe contener al menos un símbolo',
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar',
    //   });
    //   return false;
    // }

    // Guardar usuario en la lista
    this.users.push({ email, password });

    // Guardar en localStorage para persistencia
    localStorage.setItem('user', email);

    return true; // Indicar que el registro fue exitoso
  }


  getUsers(): { email: string, password: string }[] {
    return this.users;
  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    const storedUser = localStorage.getItem('user');
    // Verificar que existe un usuario en localStorage y que también existe en nuestra lista de usuarios
    return storedUser !== null && this.users.some(user => user.email === storedUser);
  }

  // Método para obtener el usuario actual
  getCurrentUser(): string | null {
    return localStorage.getItem('user');
  }

  // Método para limpiar cualquier sesión inválida
  limpiarSesionInvalida(): void {
    const usuarioAlmacenado = this.getCurrentUser();
    if (usuarioAlmacenado && !this.users.some(user => user.email === usuarioAlmacenado)) {
      // Si hay un usuario en localStorage pero no existe en nuestra lista de usuarios
      localStorage.removeItem('user');
    }
  }
}
