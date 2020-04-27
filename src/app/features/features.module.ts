import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [UsuariosComponent, UsuarioComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [UsuariosComponent, UsuarioComponent,CardComponent]
})
export class FeaturesModule { }
