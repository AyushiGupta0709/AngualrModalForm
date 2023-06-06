import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {ViewAllUsersComponent} from './view-all-users/view-all-users.component';

const routes: Routes = [
   {path:'create',component:UsersComponent},
   {path:'view',component:ViewAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
