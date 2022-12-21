import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { UpdateBookComponent } from './mange-book/updatebook/updatebook.component';
import { ViewDetailsComponent } from './add-book/view-details/view-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Material.Module';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';



@NgModule({
  imports: [     
           BrowserModule,
	   FormsModule,
	   MaterialModule,
	   HttpClientModule,
	   ReactiveFormsModule,
	   BrowserAnimationsModule,
	   RouterModule.forRoot([
		  {
			path: 'home',
			component: HomeComponent
		  },
		  {
			path: 'view-detail/:id',
			component: ViewDetailsComponent
		  },		  
		  {
			path: 'add-book',
			component: AddbookComponent
		  },
		  {
			path: 'manage-book',
			component: ManagebookComponent
		  },
		  {
			path: 'update-book/:id',
			component: UpdateBookComponent
		  },
		  {
			path: '**',
			component: PageNotFoundComponent 
		  },		  
		  {
		    path: '',
		    redirectTo: '/home',
		    pathMatch: 'full'
		  }
		]),
    BrowserAnimationsModule
  ],
  declarations: [
  AppComponent, 
	PageNotFoundComponent,
	HomeComponent,
	ViewDetailsComponent,
	AddbookComponent,
	ManagebookComponent,
	UpdateBookComponent,
 ModalpopupComponent
  ],
  providers: [
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 
