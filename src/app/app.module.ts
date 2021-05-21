import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptocurrenciesService } from './services/cryptocurrencies.service';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { ChangedPipe } from './pipes/changed.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CryptoDetailsComponent,
    ChangedPipe,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CryptocurrenciesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
