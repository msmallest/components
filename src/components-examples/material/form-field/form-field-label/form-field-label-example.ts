import {Component, signal} from '@angular/core';
import {form, FormField, FormRoot} from '@angular/forms/signals';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrl: 'form-field-label-example.css',
  imports: [
    FormField,
    FormRoot,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class FormFieldLabelExample {
  readonly options = form<{hideRequired: boolean; floatLabel: FloatLabelType}>(
    signal({
      hideRequired: false,
      floatLabel: 'auto',
    }),
  );
}
