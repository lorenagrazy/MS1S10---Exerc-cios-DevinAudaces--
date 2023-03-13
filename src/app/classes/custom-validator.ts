import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  public static notNegative(control: AbstractControl): ValidationErrors | null {
    return control.value < 0
      ? { negativeValue: { value: control.value } } : null;
  }
}
