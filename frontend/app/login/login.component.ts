import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[ReactiveFormsModule],
})
export class LoginComponent {
  frm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private router: Router,
    private userService: UserService
  ) {
    this.frm = this.formBuilder.group({
      login: this.formBuilder.group({
        Kullanici_Adi: ["", [Validators.required, Validators.minLength(3)]],
        Parola: ["", [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      const credentials = this.frm.get('login')?.value;
      this.memberService.getAllUsers().subscribe(
        response => {
          const users = response;
          const user = users.find((u: any) => u.username === credentials.Kullanici_Adi && u.password === credentials.Parola);
          if (user) {
            this.memberService.setLoggedIn(true);
            const username = credentials.Kullanici_Adi;
            this.userService.changeUsername(username);
            this.userService.changeRole(user.isAdmin === true);
            this.router.navigate(['/home']);
          } else {
            console.error('Kullanıcı adı veya şifre yanlış');
          }
        },
        error => {
          console.error('Error fetching users', error);
        }
      );
    }
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }
}
