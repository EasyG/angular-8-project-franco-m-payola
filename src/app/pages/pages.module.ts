import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesModule } from '../features/features.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FeaturesModule
  ],exports:[HomeComponent, LoginComponent, NotFoundComponent]
})
export class PagesModule { }
