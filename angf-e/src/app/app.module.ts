import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCompoComponent } from './MyComponents/Homemodel/show-compo/show-compo.component';
import { AddEdiCompoComponent } from './MyComponents/Homemodel/add-edi-compo/add-edi-compo.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NetApiService } from './net-api.service';
import { ShowDetailsComponent } from './MyComponents/show-details/show-details.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './MyComponents/email/email.component';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { BillingInstructComponent } from './Mycomponents/billing-instruct/billing-instruct.component';


@NgModule({
  
  declarations: [
    AppComponent,
    
    ShowCompoComponent,
    AddEdiCompoComponent,
    AboutComponent,
    ShowDetailsComponent,
    EditComponent,
    HomeComponent,
    EmailComponent,
    BillingInstructComponent,
    
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [NetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
