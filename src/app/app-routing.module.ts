import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [{
  path: 'login', component:LoginComponent},
  {
  path: 'detection', component: NameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
