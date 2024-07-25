import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  showError(message: string) {
    this.snackBar.open(message, 'Kapat', {
      duration: 5000, 
      panelClass: ['error-snackbar']
    });
  }
}
