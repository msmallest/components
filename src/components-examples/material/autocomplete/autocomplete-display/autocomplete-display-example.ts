import {Component, computed, signal} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {JsonPipe} from '@angular/common';
import {form, FormField, required, validate} from '@angular/forms/signals';

export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.html',
  styleUrl: 'autocomplete-display-example.css',
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, JsonPipe, FormField],
})
export class AutocompleteDisplayExample {
  // TODO - split form / model into own class fields?
  // TODO - make case matter?
  protected myControl = form(
    signal<{rawValue: string; value: User | null}>({rawValue: '', value: null}),
    p => {
      validate(p.rawValue, ({valueOf}) => {
        const rawValue = valueOf(p.rawValue);
        const matchingOption =
          this.options().find(option => option.name.toLowerCase() === rawValue.toLowerCase()) ??
          null;

        if (!matchingOption) {
          return {message: 'Value must be one of the options', kind: 'exactMatch'};
        }
        return null;
      });
    },
  );

  protected options = signal<User[]>([{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}]);

  protected filteredOptions = computed(() => {
    const name = this.myControl().value().rawValue;
    const options = this.options();
    return name ? this._filter(name) : options;
  });

  protected displayFn(user: User | null): string {
    return user && user.name ? user.name : '';
  }

  protected updateRawValue(rawValue: string): void {
    const matchingOption =
      this.options().find(option => option.name.toLowerCase() === rawValue.trim().toLowerCase()) ??
      null;
    this.myControl().value.update(model => ({...model, value: matchingOption}));
  }

  protected selectOption(user: User): void {
    this.myControl().value.update(model => ({...model, rawValue: user.name, value: user}));
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options().filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
