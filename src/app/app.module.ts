import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { UpdatebookComponent } from './mange-book/updatebook/updatebook.component';
import { ViewDetailsComponent } from './add-book/view-details/view-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [     
           BrowserModule,
	   FormsModule,
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
			component: UpdatebookComponent
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
		])
  ],
  declarations: [
  AppComponent, 
	PageNotFoundComponent,
	HomeComponent,
	ViewDetailsComponent,
	AddbookComponent,
	ManagebookComponent,
	UpdatebookComponent
  ],
  providers: [
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 
