import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-gdpr-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './gdpr-dialog.component.html'
})
export class GdprDialogComponent {}
