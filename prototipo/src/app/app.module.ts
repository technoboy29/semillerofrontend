import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/inicio/navbar/navbar.component';
import { CarouselComponent } from './components/inicio/carousel/carousel.component';
import { AdvantageComponent } from './components/inicio/advantage/advantage.component';
import { FeatureComponent } from './components/inicio/feature/feature.component';
import { SuscribeComponent} from './components/inicio/suscribe/suscribe.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { MarihuanaComponent } from './components/marihuana/marihuana.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginoneComponent } from './components/loginone/loginone.component';
import { RegisteroneComponent } from './components/registerone/registerone.component';
import { LoginComponent } from './components/loginone/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreregisterComponent } from './components/registerone/preregister/preregister.component';
import { PersonalComponent } from './components/personal/personal.component';
import { EntityComponent } from './components/entity/entity.component';
import { PhaseperComponent } from './components/personal/phaseper/phaseper.component';
import { PhaseentComponent } from './components/entity/phaseent/phaseent.component'; 




 





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AdvantageComponent,
    FeatureComponent,
    SuscribeComponent,
    FooterComponent,
    MarihuanaComponent,
    InicioComponent,
    LoginoneComponent,
    RegisteroneComponent,
    LoginComponent,
    PreregisterComponent,
    PersonalComponent,
    EntityComponent,
    PhaseperComponent,
    PhaseentComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
