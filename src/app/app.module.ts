import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskManagerComponent } from './task-manager/task-manager.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { TaskCardComponent } from './task-card/task-card.component'
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
} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { TaskFormComponent } from './task-form/task-form.component'
import { HeaderComponent } from './header/header.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { AppEffects } from './app.effects'

import * as TaskReducer from './store/task.reducer'
import { TaskEffects } from './store/task.effects'

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskCardComponent,
    TaskFormComponent,
    HeaderComponent,
  ],
  entryComponents: [TaskFormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: TaskManagerComponent },
      { path: 'admin', component: TaskManagerComponent },
    ]),
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
    MatGridListModule,
    StoreModule.forRoot({ tasks: TaskReducer.TaskReducer }),
    EffectsModule.forRoot([TaskEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
