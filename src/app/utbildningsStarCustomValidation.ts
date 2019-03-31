import {AbstractControl} from '@angular/forms';

export function startIntervall(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== undefined && (isNaN(control.value) || control.value < 1950 || control.value > 2030)) {
    return {start: true};
  }
  return null;
}
