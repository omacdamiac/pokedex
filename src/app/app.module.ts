import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FilterPipeModule } from "ngx-filter-pipe";
import { OrderModule } from "ngx-order-pipe";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page404Component } from './components/page404/page404.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from "./guards/auth.guard";

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

//SERVICIOS
import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    DashboardComponent,
    Page404Component,
    FooterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
    MatInputModule,
    InfiniteScrollModule,
    FilterPipeModule,
    OrderModule
  ],
  providers: [AuthService, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
