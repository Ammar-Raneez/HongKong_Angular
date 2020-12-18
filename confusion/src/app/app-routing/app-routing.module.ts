import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { routes } from './routes'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //pass routes as a parameter
    RouterModule.forRoot(routes)
  ],
  //export it so RouterModule is available for AppModule
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
