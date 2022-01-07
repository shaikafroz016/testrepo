import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { AddEdiCompoComponent } from './MyComponents/Homemodel/add-edi-compo/add-edi-compo.component';
import { ShowCompoComponent } from './MyComponents/Homemodel/show-compo/show-compo.component';
import { ShowDetailsComponent } from './MyComponents/show-details/show-details.component';

const routes: Routes = [
  {path:"",redirectTo: 'Lobcat', pathMatch: 'full'},
  {path:"Lobcat",component:ShowCompoComponent},
  {path:"Lobcat/:LobcatId/view",component:ShowDetailsComponent},
  {path:"Lobcat/create",component:AddEdiCompoComponent},
  {path:"Lobcat/:LobcatId/edit",component:EditComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
