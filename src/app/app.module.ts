import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LeftComponent } from 'src/components/left/left.component';
import { MiddleComponent } from 'src/components/middle/middle.component';
import { LastComponent } from 'src/components/last/last.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomecomponentComponent } from 'src/components/homec/homecomponent/homecomponent.component';
import { AboutComponent } from 'src/components/about/about/about.component';
import { ContactComponent } from 'src/components/contact/contact/contact.component';
import { ItemListComponent } from 'src/components/listComponent/item-list/item-list.component';
import { ItemDetailComponent } from 'src/components/listComponent/item-detail/item-detail.component';
import { MathsService } from 'src/services/maths.service';
import { SqrtPipe } from 'src/pipes/sqrt.pipe';
import { ShortenPipe } from 'src/pipes/shorten.pipe';
import { TdformComponent } from 'src/components/tdform/tdform/tdform.component';
import { ReactiveFormComponent } from 'src/components/reactiveForm/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DbconComponent } from 'src/components/dbconnection/dbcon/dbcon.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDataComponent } from 'src/components/weatherapi/weather-data/weather-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    MiddleComponent,
    LastComponent,
    HomecomponentComponent,
    AboutComponent,
    ContactComponent,
    ItemListComponent,
    ItemDetailComponent,
    SqrtPipe,
    ShortenPipe,
    TdformComponent,
    ReactiveFormComponent,
    DbconComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
