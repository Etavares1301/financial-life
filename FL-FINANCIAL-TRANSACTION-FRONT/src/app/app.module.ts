import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent], //usar em modo de desenvolvimento
  entryComponents:[AppComponent] // usar em modo de produção
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('micro-financial-transaction', element);
  }
 }
