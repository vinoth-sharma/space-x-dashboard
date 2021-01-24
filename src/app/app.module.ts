import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';
import { ProgramWrapperComponent } from './program-wrapper/program-wrapper.component';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FilterWrapperComponent,
    ProgramWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
