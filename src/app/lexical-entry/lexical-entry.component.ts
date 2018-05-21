import { Component, OnInit, Input } from '@angular/core';
import { LexicalEntry, Sense } from '../oxford-dict';

@Component({
  selector: 'app-lexical-entry',
  templateUrl: './lexical-entry.component.html',
  styleUrls: ['./lexical-entry.component.css']
})
export class LexicalEntryComponent implements OnInit {
  @Input() lexicalEntry: LexicalEntry;

  constructor() { }

  ngOnInit() {
  }

  private getTranslationSense(): Sense {
    return this.lexicalEntry.entries[0].senses.filter(y => y.hasOwnProperty('translations'))[0];
  }

  getTranslation(): string {
    return this.getTranslationSense().translations[0].text;
  }

  getExamples() {
    const sense = this.getTranslationSense();
    return sense.examples
      .filter(x => x.translations.length > 0
        && x.translations[0].text.includes(sense.translations[0].text))
      .slice(0, 3);
  }
}
