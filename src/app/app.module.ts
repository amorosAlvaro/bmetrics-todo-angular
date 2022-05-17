import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component'
import { TodoItemComponent } from './todo-item/todo-item.component'
import { ListManagerComponent } from './list-manager/list-manager.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { TaskCardComponentComponent } from './task-card-component/task-card-component.component'
import {
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material'
import { FormComponentComponent } from './form-component/form-component.component'

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    TaskCardComponentComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
