import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './modules/contact/contact.component';
import { DepartmentsComponent } from './modules/departments/departments.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactService } from './core/services/contact.service';
import { ApiMetComponent } from './modules/api-met/api-met.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DepartmentsComponent,
    SearchComponent,
    ApiMetComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
