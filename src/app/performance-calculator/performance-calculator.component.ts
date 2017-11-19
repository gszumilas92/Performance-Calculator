import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-performance-calculator',
  styleUrls: ['./performance-calculator.component.css'],
  template: 
  `
  <form [formGroup]="userInput" novalidate>
    <input type="number" formControlName="employees" placeholder="How many employees?">
    <input type="time" formControlName="startTime" placeholder="Time start">
    <input type="time" formControlName="endTime" placeholder="Time end">
    <input type="number" formControlName="boxesDone" placeholder="Amount of boxes done">
  </form>

  <button (click)="addPerformance()" type="button">Add an performance</button>

  <p>{{ performancesData }}</p>
  
  <ol>
    <li *ngFor="let data of performancesData">
      <div>
        <p>Number of employees: {{data.userInput.employees}}<br/></p>
        <p>Start Time: {{data.userInput.startTime}}<br/></p>
        <p>End Time: {{data.userInput.endTime}}<br/></p>
        <p>Boxes Done: {{data.userInput.boxesDone}}<br/></p>
        <p>---------------------------------</p>
      </div>
      <div>
        <p>Time Elapsed: </p>
        <p>Total break time:</p>
        <p>Performance:{{data.performance.timeElapsed}}</p>
        <p>=======================</p>
      </div>
    </li>
  </ol>
  `
})

export class PerformanceCalculatorComponent implements OnInit {
  
  constructor() { }

  performancesData: Array<Object>

  userInput = new FormGroup ({
    employees:new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
    boxesDone: new FormControl()
  })

  performance = {

  }

  data = {
    userInput: this.userInput,
    performance: this.performance
  }

  
  
  minutesInNumberFromString(time) {
    //Note: String value must be hh:mm - since it's controlled by type="time" in input
    return Number(time.slice(0,2) * 60) + Number(time.slice(3, 6))
  }

  calcTimeElapsedinMinutes(startTime, endTime) {
    return endTime - startTime
  }

  addPerformance() {
    const startTime = this.minutesInNumberFromString(this.data.userInput.value.startTime)
    const endTime = this.minutesInNumberFromString(this.data.userInput.value.endTime)

    this.performancesData.push(
      {
        userInput: this.userInput.value,
        performance: {
          timeElapsed: endTime - startTime
        }
      }
    )

    console.log(this.performancesData)

  }

  ngOnInit() {
    this.performancesData = []
  }
  
}
