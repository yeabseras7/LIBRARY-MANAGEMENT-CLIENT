import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GradComponent } from './grad/grad.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { ReferComponent } from './refer/refer.component';
import { UndergradComponent } from './undergrad/undergrad.component';

const routes: Routes = [

  {path: '', component: LandingComponent},
  {path: 'login', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'loan', component: LoanComponent},
  {path: 'add_book', component: BookFormComponent},
  {path: 'add_loan', component: LoanFormComponent},
  {path: 'ugs', component: UndergradComponent},
  {path: 'gs', component: GradComponent},
  {path: 'rs', component: ReferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
