import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demographic',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './demographic.component.html',
  styleUrl: './demographic.component.css'
})
export class DemographicComponent {

  demographicroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    birthDate: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('', [
      Validators.required, 
      Validators.min(0), 
      Validators.max(120)
    ]),
    address: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    if (this.demographicroup.valid) {
      console.log('Demographic Form Submitted', this.demographicroup.value);
    } else {
      console.log('Demographic Form is invalid');
    }
  }
}
