import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatToolbarModule,
          MatIconModule,
          MatMenuModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
      MatDividerModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
