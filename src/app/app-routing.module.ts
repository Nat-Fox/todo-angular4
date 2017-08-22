import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importa nuevos componentes
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
