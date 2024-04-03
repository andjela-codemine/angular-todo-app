import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCheckbox } from '@angular/material/checkbox';
import { mileageRangeValidator } from '../../directives/mileageValidator.directive';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { GdprDialogComponent } from '../gdpr-dialog/gdpr-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ],
  imports: [ MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton, MatSlideToggle, MatCheckbox, NgbAlert, AngularPhoneNumberInput ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  userForm: FormGroup | undefined;
  formSubmitted: boolean = false;
  formSuccessfullySubmitted?: boolean;

  constructor(public dialog: MatDialog) {}

  get name() {
    return this.userForm?.get('name');
  }

  get email() {
    return this.userForm?.get('email');
  }

  get phone() {
    return this.userForm?.get('phone');
  }

  get mileage() {
    return this.userForm?.get('mileage');
  }

  get regNumber() {
    return this.userForm?.get('regNumber');
  }

  get message() {
    return this.userForm?.get('message');
  }

  get gdpr() {
    return this.userForm?.get('gdpr');
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required ]),
      mileage: new FormControl(''),
      regNumber: new FormControl(''),
      message: new FormControl('', Validators.required),
      gdpr: new FormControl('', Validators.requiredTrue)
    });
  }

  toggleExchangeInputs(exchangeChecked: boolean): void {
    const mileageControl = this.mileage;
    const regNumberControl = this.regNumber;

    if (exchangeChecked) {
      mileageControl?.setValidators([ Validators.required, Validators.pattern('^[0-9]*$'), mileageRangeValidator() ]);
      regNumberControl?.setValidators([ Validators.required, Validators.pattern(/^[A-Z]{3}\d{2}[A-Z\d]$/) ]);
    } else {
      mileageControl?.clearValidators();
      mileageControl?.setValue('');

      regNumberControl?.clearValidators();
      regNumberControl?.setValue('');
    }
    mileageControl?.updateValueAndValidity();
    regNumberControl?.updateValueAndValidity();
  }

  onFormSubmit(): void {
    this.formSubmitted = true;
    this.formSuccessfullySubmitted = !!this.userForm?.valid;
  }

  openGDPR(): void {
    this.dialog.open(GdprDialogComponent);
  }
}
