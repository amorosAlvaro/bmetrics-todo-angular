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

import { TaskFormComponent } from './task-form/task-form.component'
import { HeaderComponent } from './header/header.component'

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
