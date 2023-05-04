import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  showToast:boolean = false;
  passwordPattern: any =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/;
  emailPattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private _fb: FormBuilder, private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.signInForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      isRemember: [false],
    });
  }

  signin() {
    if (this.signInForm.status === 'VALID') {
      this.api.login().subscribe({
        next: (res: any) => {
          let response: any = res;
          const user = response.find((a: any) => {
            return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password;
          });
          if(user){
            localStorage.setItem("user",JSON.stringify(response));
            localStorage.setItem("isLoggedIn",'true');
            this.router.navigate(['/posts']);
            this.api.isLoggedIn.next(true)
          }else{
            this.router.navigate(['/sign-in']);
          }
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
