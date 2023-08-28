import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from "@/app/tasks/task-list/task-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/display',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: 'display',
    loadChildren: () => import('@/app/tasks/tasks.module').then(module => module.TasksModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
