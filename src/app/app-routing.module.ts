import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DVDComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DvdDetailComponent } from './DVD/dvd-detail/dvd-detail.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DVDComponent},
  { path: 'books', component: BookComponent},
  { path: 'dvds/:index', component:  DvdDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: '**', component: PageNotFoundComponent},
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
