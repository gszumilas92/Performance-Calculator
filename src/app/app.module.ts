import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { PerformanceCalculatorComponent } from './performance-calculator/performance-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
