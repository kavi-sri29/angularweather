import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about/about.component';
import { ContactComponent } from 'src/components/contact/contact/contact.component';
import { HomecomponentComponent } from 'src/components/homec/homecomponent/homecomponent.component';
import { ItemDetailComponent } from 'src/components/listComponent/item-detail/item-detail.component';
import { ItemListComponent } from 'src/components/listComponent/item-list/item-list.component';

const routes: Routes = [
  {path: '', component: HomecomponentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'items/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
