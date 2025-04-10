import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

export const routes: Routes = [

  {
    path: '',
    component: HeroSectionComponent,
  },
  {
    path: 'home',
    component: HeroSectionComponent,
  },
{
  path:'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},

];
