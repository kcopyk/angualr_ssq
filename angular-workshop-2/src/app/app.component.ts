import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemographicComponent } from './demographic/demographic.component';
import { SampleDirective } from './sample.directive';
import { CommonModule } from '@angular/common';
import { MyStructuralDirective } from './my-structural.directive';
import { ExamplepipePipe } from './examplepipe.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent,DemographicComponent,SampleDirective,CommonModule,MyStructuralDirective,ExamplepipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-workshop-2';
  someObject: any = [
    { id: 1, name: 'billy', age: 30 },
    { id: 2, name: 'joe', age: 25 }
  ];
}
