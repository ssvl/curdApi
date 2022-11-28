import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateformComponent } from './updateform/updateform.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'update/:id',
    component:UpdateformComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
