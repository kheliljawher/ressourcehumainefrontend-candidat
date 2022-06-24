import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './components/home/candidat/candidat.component';
import { CandidatureDetailsComponent } from './components/home/candidature-details/candidature-details.component';
import { CandidatureComponent } from './components/home/candidature/candidature.component';
import { HomeComponent } from './components/home/home/home.component';
import { LayoutComponent } from './components/home/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent, children:[
    {path:"layout",component:LayoutComponent},
    // {path:"candidature-details/:id_candidature",component:CandidatureDetailsComponent},
    {path:"candidature-details",component:CandidatureDetailsComponent},
    {path:"",component:CandidatureComponent},
    {path:"profile",component:ProfileComponent},
    {path:"candidat",component:CandidatComponent},
 
  ]},
 
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
