import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Component, inject, signal} from '@angular/core';
import {disabled, form, FormField} from '@angular/forms/signals';
import {MatButtonModule} from '@angular/material/button';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Chips with form field (signal forms)
 */
@Component({
  selector: 'chips-signal-form-example',
  templateUrl: 'chips-signal-form-example.html',
  styleUrl: 'chips-signal-form-example.css',
  imports: [FormField, MatButtonModule, MatFormFieldModule, MatChipsModule, MatIconModule],
})
export class ChipsSignalFormExample {
  readonly keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);

  protected model = signal({
    word: 'angular',
    enabled: true,
  });
  readonly form = form(this.model, p => {
    disabled(p, {
      when: ({valueOf}) => !valueOf(p.enabled),
    });
  });

  announcer = inject(LiveAnnouncer);

  protected removeKeyword(keyword: string) {
    this.keywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword}`);
      return [...keywords];
    });
  }

  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.update(keywords => [...keywords, value]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
