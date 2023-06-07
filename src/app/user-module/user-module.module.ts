import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UsersComponent } from './users/users.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PreviewModelComponent } from './preview-model/preview-model.component';

console.warn("User module");
@NgModule({
  declarations: [
    UsersComponent,
    ViewAllUsersComponent,
    PreviewModelComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModuleModule { }
