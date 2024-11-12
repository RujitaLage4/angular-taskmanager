import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { CreateFormComponent } from './pages/task-view/create-form/create-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, TaskViewComponent, CreateFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
