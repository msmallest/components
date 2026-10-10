import {Component, computed, signal} from '@angular/core';
import {FormField, FormRoot} from '@angular/forms/signals';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {form} from '@angular/forms/signals';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'autocomplete-optgroup-example',
  templateUrl: 'autocomplete-optgroup-example.html',
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormField, FormRoot],
})
export class AutocompleteOptgroupExample {
  protected stateForm = form(signal({stateGroup: ''}));
  private _stateGroups = stateGroups;

  protected stateGroupOptions = computed<StateGroup[]>(() =>
    this._filterGroup(this.stateForm.stateGroup().value()),
  );

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this._stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this._stateGroups;
  }
}

const stateGroups: StateGroup[] = [
  {
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
  },
  {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut'],
  },
  {
    letter: 'D',
    names: ['Delaware'],
  },
  {
    letter: 'F',
    names: ['Florida'],
  },
  {
    letter: 'G',
    names: ['Georgia'],
  },
  {
    letter: 'H',
    names: ['Hawaii'],
  },
  {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
  },
  {
    letter: 'K',
    names: ['Kansas', 'Kentucky'],
  },
  {
    letter: 'L',
    names: ['Louisiana'],
  },
  {
    letter: 'M',
    names: [
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
    ],
  },
  {
    letter: 'N',
    names: [
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
    ],
  },
  {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon'],
  },
  {
    letter: 'P',
    names: ['Pennsylvania'],
  },
  {
    letter: 'R',
    names: ['Rhode Island'],
  },
  {
    letter: 'S',
    names: ['South Carolina', 'South Dakota'],
  },
  {
    letter: 'T',
    names: ['Tennessee', 'Texas'],
  },
  {
    letter: 'U',
    names: ['Utah'],
  },
  {
    letter: 'V',
    names: ['Vermont', 'Virginia'],
  },
  {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  },
];
