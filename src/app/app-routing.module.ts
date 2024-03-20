import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {path:"",loadComponent:()=>import('./components/blan-layout/blan-layout.component').then((m)=>m.BlanLayoutComponent),children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
    {path:"reading/:id",loadComponent:()=>import('./components/reading-sura/reading-sura.component').then((m)=>m.ReadingSuraComponent)}
  ]},
  {path:"",loadComponent:()=>import('./components/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),children:[
    {path:"login",loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)},
    {path:"reading",loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)},
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
