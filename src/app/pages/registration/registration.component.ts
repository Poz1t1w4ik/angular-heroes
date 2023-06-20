import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { MainService } from 'src/app/core/service/main.service';
import {confirmPasswordValidator} from "../../core/validator/confirmPasword";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit{

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
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this._passwordRegExp)]],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    }, {
      validators: [confirmPasswordValidator()]
    });
  }

  public register(): void {
    const userData = this.myForm.value;
    const usersData = this.mainService.getLocalData('users');
    const username = userData.username;

    if (this._uniqueDataUser(usersData, userData)) {
      this.mainService.warningMessage('Nickname or mail already exists');

      return;
    }

    usersData[username] = userData;

    this.mainService.setLocalData('users', usersData);

    this.router.navigate(['/authorization']).then(() => {});
  }

  private _uniqueDataUser(usersData: any, userCurrent: any): boolean {
    const email = userCurrent.email;
    const username = userCurrent.username;

    const isEmailExists = Object.values(usersData).some((user: any) => user.email === email);
    const isUsernameExists = Object.keys(usersData).includes(username);

    return isEmailExists || isUsernameExists;
  }
}
