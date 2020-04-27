import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import {  UsersEffects} from './features/store/users.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsersReducer from './features/store/users.reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ users: fromUsersReducer.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffects])
    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
