import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
   path:'',
   component:HomeComponent
  },
  { 
    path: '', 
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule) 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'sign-up', 
    component: SignUpComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'shop', 
    component: ShopComponent 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
