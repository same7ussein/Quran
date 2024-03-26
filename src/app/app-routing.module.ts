import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {path:"",loadComponent:()=>import('./components/blan-layout/blan-layout.component').then((m)=>m.BlanLayoutComponent),children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"reciters",loadComponent:()=>import('./components/reciters/reciters.component').then((m)=>m.RecitersComponent),
   
   },
   {path:'audio/:id',loadComponent:()=>import('./components/quran-audio/quran-audio.component').then((m)=>m.QuranAudioComponent)},
    {path:"home",loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),children:[
      {path:"",redirectTo:"suras" , pathMatch:'full'},
      {path:"suras",loadComponent:()=>import('./components/home-sura/home-sura.component').then((m)=>m.HomeSuraComponent)},
      {path:"juzs",loadComponent:()=>import('./components/home-juz/home-juz.component').then((m)=>m.HomeJuzComponent)},
    ]},
    {path:"reading/:id",loadComponent:()=>import('./components/reading-sura/reading-sura.component').then((m)=>m.ReadingSuraComponent)},
    {path:"translation/:id",loadComponent:()=>import('./components/translation/translation.component').then((m)=>m.TranslationComponent)},
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
