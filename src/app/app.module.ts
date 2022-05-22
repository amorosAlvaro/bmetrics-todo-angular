import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskManagerComponent } from './components/task-manager/task-manager.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { TaskCardComponent } from './components/task-card/task-card.component'
import {
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatBadgeModule,
} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { TaskFormComponent } from './components/task-form/task-form.component'
import { HeaderComponent } from './components/header/header.component'
import { StoreModule } from '@ngrx/store'
import { TaskReducer } from './store/task.reducer'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskCardComponent,
    TaskFormComponent,
    HeaderComponent,
    LoginFormComponent,
  ],
  entryComponents: [TaskFormComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    StoreModule.forRoot({ taskList: TaskReducer }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
