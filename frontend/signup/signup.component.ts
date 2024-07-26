import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpService } from '../services/signUp.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule] 
})
export class SignupComponent {
  frm: FormGroup;
  usernameExists: boolean = false; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signUpService: signUpService
  ) {
    this.frm = this.formBuilder.group({
      login: this.formBuilder.group({
        Username: ["", [Validators.required, Validators.minLength(3)]],
        Password: ["", [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      const username = this.frm.value.login.Username;

      this.signUpService.checkUsername(username).subscribe({
        next: (exists) => {
          if (exists) {
            this.usernameExists = true;
            setTimeout(() => {
              this.usernameExists = false;
            }, 5000);
          } else {
            this.usernameExists = false;
            const userData = this.frm.value.login;
            
            this.signUpService.createUser(userData).subscribe({
              next: (response) => {
                console.log('User created successfully');
                this.router.navigate(['/login']);
              },
              error: (error) => {
                console.error('Error creating user', error);
              }
            });
          }
        },
        error: (error) => {
          console.error('Error checking username', error);
        }
      });
    }
  }
}
