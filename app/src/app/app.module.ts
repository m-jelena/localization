import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    TranslateModule.forRoot({  
    loader: {  
      provide: TranslateLoader,  
      useFactory: httpTranslateLoader,  
      deps: [HttpClient]  
      }  
    })  
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);  
}  
