import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="changeTitle(getInputValue($event))">

  <button (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.scss']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }                     

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  
  
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}