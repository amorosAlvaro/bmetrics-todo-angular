import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input  #inputElementRef
            [placeholder]="title"
            (keyup.enter)="submitValue($event.target.value)"
            (keyup.enter)="inputElementRef.value = ''"
             >


    <button  m (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  title = 'Add your task here';

  constructor() {

  }

  submitValue(newTitle: string): void {
    console.log(newTitle);
    this.submit.emit(newTitle);
  }


  ngOnInit(): void {

  }
}