import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoanComponent } from './loan/loan.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { UndergradComponent } from './undergrad/undergrad.component';
import { GradComponent } from './grad/grad.component';
import { ReferComponent } from './refer/refer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LandingComponent,
    CatalogComponent,
    LoanComponent,
    NavBar1Component,
    NavBar2Component,
    LoanFormComponent,
    BookFormComponent,
    UndergradComponent,
    GradComponent,
    ReferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
