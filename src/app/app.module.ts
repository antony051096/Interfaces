import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlquilarComponent } from './components/alquilar/alquilar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { DevolverComponent } from './components/devolver/devolver.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    AlquilarComponent,
    NavbarComponent,
    RecargarComponent,
    DevolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
