import { NgModule} from '@angular/core';
import { InicioComponent } from "./components/inicio/inicio.component"
import { MarihuanaComponent } from "./components/marihuana/marihuana.component"
import { LoginoneComponent } from "./components/loginone/loginone.component"
import { RegisteroneComponent } from "./components/registerone/registerone.component";
import { PersonalComponent } from "./components/personal/personal.component"; 
import { EntityComponent } from "./components/entity/entity.component";
import { Routes, RouterModule } from '@angular/router'





const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path:"marihuana",
    component: MarihuanaComponent
  },
  {
    path:"login",
    component: LoginoneComponent
  },
  {
    path:"preregister",
    component:RegisteroneComponent
  },
  {
    path:"phaseper",
    component:PersonalComponent
  },
  {
    path:"phaseent",
    component:EntityComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
