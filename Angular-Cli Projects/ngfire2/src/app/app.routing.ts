import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes=[
  {path:'', component:LoginComponent},
  {path:'home',component:HomeComponent}
];

export const appRoutingProvides: any[]=[];
export const routing=RouterModule.forRoot(appRoutes);
