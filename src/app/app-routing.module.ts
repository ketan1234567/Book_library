import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from './add-book/view-details/view-details.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { UpdateBookComponent } from './mange-book/updatebook/updatebook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'view-detail/:id', component:ViewDetailsComponent},		  
{ path: 'add-book', component: AddbookComponent },
{ path: 'manage-book', component: ManagebookComponent },
{ path: 'update-book/:id', component: UpdateBookComponent }, 
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
