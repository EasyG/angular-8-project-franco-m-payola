import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from '../features/usuarios/usuarios.component';
import { CardComponent } from '../features/card/card.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'card/:id/:name/:email/:street/:suite/:zipcode/:city/:phone/:website/:companyName/:catchPhrase ', component: CardComponent,canActivate: [AuthGuard]},  
  { path: '', pathMatch: 'full', redirectTo: '/home/usuarios' }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
