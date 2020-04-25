import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Observable } from 'rxjs';
import { GitserviceService } from './gitservice.service';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgpSortModule } from "ngp-sort-pipe";
import { NgxUiLoaderModule } from 'ngx-ui-loader';
 
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgpSortModule,
    NgxUiLoaderModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
