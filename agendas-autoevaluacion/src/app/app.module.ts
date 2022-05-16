import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BarrasComponent } from './componentes/barras/barras.component';
import { LoginComponent } from './componentes/login/login.component';
import { FiscalComponent } from './componentes/fiscal/fiscal.component';
import { ObservacionesComponent } from './componentes/observaciones/observaciones.component';
import { DenunciasComponent } from './componentes/denuncias/denuncias.component';
import { QuejasComponent } from './componentes/quejas/quejas.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BarrasComponent,
    LoginComponent,
    FiscalComponent,
    ObservacionesComponent,
    DenunciasComponent,
    QuejasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
