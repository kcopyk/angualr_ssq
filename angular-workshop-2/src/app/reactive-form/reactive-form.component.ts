import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  logingroup: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required, 
      Validators.email, 
      Validators.minLength(5), 
      Validators.maxLength(50),
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl(null, [
      Validators.minLength(8), 
      Validators.maxLength(15), 
      Validators.required
    ]),
  });

  get email() {
    return this.logingroup.get('email');
  }

  get password() {
    return this.logingroup.get('password');
  }

  onSubmit() {
    if (this.logingroup.valid) {
      console.log('Loggroup Submitted', this.logingroup.value);
    } else {
      console.log('Login Form is invalid');
    }
  }
}
