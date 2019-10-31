import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddComponent } from './components/contact/add/add.component';
import { EditComponent } from './components/contact/edit/edit.component';
const routes: Routes = [
  { path: "", component:  ContactComponent},
  { path: "add", component:  AddComponent},
  { path: ":id/edit", component:  EditComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
