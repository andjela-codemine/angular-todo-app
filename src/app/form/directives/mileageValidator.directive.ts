import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mileageRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const mileage = control.value;
    if (mileage < 0) {
      return { negativeMileage: true };
    } else if (mileage > 1000) {
      return { oldCar: true };
    }
    return null;
  };
}
