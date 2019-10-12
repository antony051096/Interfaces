import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlquilarComponent } from './components/alquilar/alquilar.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { DevolverComponent } from './components/devolver/devolver.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{
  path: 'inicio',
  component: InicioComponent
},
{
  path: 'menu',
  component: MenuComponent
},
{
  path: "alquilar",
  component: AlquilarComponent
},
{
  path: "recargar",
  component: RecargarComponent
},
{
  path: "devolver",
  component: DevolverComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
