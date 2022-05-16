import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componenntes
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BarrasComponent } from './componentes/barras/barras.component';
import { LoginComponent } from './componentes/login/login.component';
import { FiscalComponent } from './componentes/fiscal/fiscal.component';
import { ObservacionesComponent } from './componentes/observaciones/observaciones.component';
import { DenunciasComponent } from './componentes/denuncias/denuncias.component';
import { QuejasComponent } from './componentes/quejas/quejas.component';


const routes: Routes = [   
{ path: 'home', component: HomeComponent },
{ path: 'nav', component: NavComponent },
{ path: 'barras', component: BarrasComponent },
{ path: 'fiscal', component: FiscalComponent },
{ path: 'observaciones', component: ObservacionesComponent },
{ path: 'denuncias', component: DenunciasComponent },
{ path: 'quejas', component: QuejasComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', pathMatch:'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
