import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AgentsComponent } from './agents/agents.component';
import { CitysComponent } from './citys/citys.component';
import { HouseComponent } from './house/house.component';
import { PropertiesComponent } from './properties/properties.component';
import { DefaultValueAccessor } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: '',
    component: HeroSectionComponent,
  },
  {
    path:'properties',
    component: PropertiesComponent
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
{
  path:'agents',
  component: AgentsComponent
},
 {
   path:'dashBoard',
  component: DashboardComponent
 }


];
