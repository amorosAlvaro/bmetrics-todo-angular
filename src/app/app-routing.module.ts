import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TaskManagerComponent } from './components/task-manager/task-manager.component'
import { AdminGuard } from './guards/admin.guard'

const routes: Routes = [
  { path: '', component: TaskManagerComponent },
  { path: 'admin', component: TaskManagerComponent, canActivate: [AdminGuard] },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
