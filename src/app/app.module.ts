import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CandidatureComponent } from './components/home/candidature/candidature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/home/layout/layout.component';
import { CandidatComponent } from './components/home/candidat/candidat.component';
import { CandidatureDetailsComponent } from './components/home/candidature-details/candidature-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RechercheCandidatureTitrePipe } from './pipes/recherche-candidature-titre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    CandidatureComponent,
    LayoutComponent,
    CandidatComponent,
    CandidatureDetailsComponent,
    ProfileComponent,
    RechercheCandidatureTitrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
