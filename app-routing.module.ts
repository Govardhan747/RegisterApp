import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'gotoRegister',component:RegistrationComponent},
  {path:'home', canActivate:[AuthGuard],  component:WellcomeComponent},
  {path:'login',component:LoginComponent},
  
  {path:'hometologin',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
