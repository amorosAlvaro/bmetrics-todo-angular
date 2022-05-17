import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
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
  MatDialogModule,
  MatButtonModule,
} from '@angular/material'
import { FormComponent } from './form-component/form.component'
import { OpenDialogButtonComponent } from './open-dialog-button/open-dialog-button.component'

@NgModule({
  declarations: [
    AppComponent,
    ListManagerComponent,
    TaskCardComponentComponent,
    FormComponent,
    OpenDialogButtonComponent,
  ],
  entryComponents: [FormComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
