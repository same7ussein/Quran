import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {path:"",loadComponent:()=>import('./components/blan-layout/blan-layout.component').then((m)=>m.BlanLayoutComponent),children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
