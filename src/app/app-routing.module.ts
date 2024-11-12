import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { CreateFormComponent } from './pages/task-view/create-form/create-form.component';

const routes: Routes = [
  {
    path: '',
    component: TaskViewComponent,
  },
  {
    path: 'create-form',
    component: CreateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
