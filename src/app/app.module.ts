import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerNameComponent } from './components/server-name/server-name.component';
import { TagDataComponent } from './components/tag-data/tag-data.component';
import { TagInfoComponent } from './components/tag-info/tag-info.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ServerListComponent,
    ServerNameComponent,
    TagDataComponent,
    TagInfoComponent,
    TagListComponent,
    UserInfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
