import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TaskManagerComponent } from './task-manager/task-manager.component'

const routes: Routes = [
  { path: '', component: TaskManagerComponent },
  { path: 'admin', component: TaskManagerComponent },
  { path: 'user', component: TaskManagerComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
