import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"addclient", component:AddclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
