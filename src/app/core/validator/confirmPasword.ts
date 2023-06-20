import {ValidatorFn, AbstractControl} from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { confirmPasswordMismatch: true };
    }

    return null;
  };
}
