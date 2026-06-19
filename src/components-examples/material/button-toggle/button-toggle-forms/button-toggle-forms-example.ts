import {Component, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormField, form} from '@angular/forms/signals';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Button-toggles with forms
 */
@Component({
  selector: 'button-toggle-forms-example',
  templateUrl: 'button-toggle-forms-example.html',
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule, FormField],
})
export class ButtonToggleFormsExample {
  fontStyleForm = form(signal(''));
  fontStyle?: string;
  fontStyleControl = new FormControl('');
}
