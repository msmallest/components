import {Component, computed, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrl: 'autocomplete-filter-example.css',
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormField],
})
export class AutocompleteFilterExample {
  protected form = form(signal(''));
  protected options = ['One', 'Two', 'Three'] as const;

  protected filteredOptions = computed(() => this._filter(this.form().value()));

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
