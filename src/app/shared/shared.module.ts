import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],exports:[NavbarComponent, FooterComponent, LayoutComponent]
})
export class SharedModule { }
