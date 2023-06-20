import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MainService} from "../../core/service/main.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public myForm!: FormGroup;
  private _passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.pattern(this._passwordRegExp)]]
    });
  }

  public auth(): void {
    if (this.myForm.valid) {
      const user = this.myForm.value;
      const users = this.mainService.getLocalData('users');

      const userKey = Object.keys(users).find(key => key === user.username);

      if (userKey && users[userKey].password === user.password) {
        this.mainService.createToken();

        this.mainService.setLocalData('currentUser', userKey);

        this.router.navigate(['/home']).then(() => {});

        this.mainService.warningMessage('Welcome!');
      }
    }
  }
}
