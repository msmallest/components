import {Component, signal} from '@angular/core';
import {form, FormField, required} from '@angular/forms/signals';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

/**
 * @title Testing with MatFormFieldHarness
 */
@Component({
  selector: 'form-field-harness-example',
  templateUrl: 'form-field-harness-example.html',
  imports: [MatFormFieldModule, MatInputModule, FormField],
})
export class FormFieldHarnessExample {
  readonly model = signal('Initial value');

  readonly requiredField = form(this.model, p => {
    required(p);
  });
}
