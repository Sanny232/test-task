import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./pages/services/services.component";
import {DetailsComponent} from "./pages/details/details.component";
import {HomeComponent} from "./pages/home/home.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {OverviewComponent} from "./pages/overview/overview.component";

const routes: Routes = [
  {path: 'services', component: ServicesComponent, pathMatch: "full"},
  {path: 'contacts', component: ContactsComponent, pathMatch: "full"},
  {path: 'details', component: DetailsComponent, pathMatch: "full"},
  {path: 'overview', component: OverviewComponent, pathMatch: "full"},
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
