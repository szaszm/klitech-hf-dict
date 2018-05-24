import { Component, OnInit, Input } from '@angular/core';
import { ThesaurusService, HeadwordThesaurus, ThesaurusLexicalEntry, LexicalEntry, ThesaurusSense } from '../oxford-dict';
import { AppConfig } from '../app.config';
import * as rx from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css']
})
export class SynonymComponent implements OnInit {

  query: string;
  @Input() languageId: string;
  result: Observable<ThesaurusSense[]>;
  synonyms: Observable<ThesaurusSense[]>;
  antonyms: Observable<ThesaurusSense[]>;
  incompleteQuery = true;
  resultSub: Subscription;

  constructor(private thesaurusService: ThesaurusService) { }

  ngOnInit() {
  }

  doLookup(): void {
    if (this.resultSub) { this.resultSub.unsubscribe(); this.resultSub = undefined; }

    this.result = this.thesaurusService.entriesSourceLangWordIdSynonymsantonymsGet(this.languageId, this.query,
      AppConfig.APP_ID, AppConfig.APP_KEY)
      .pipe(rx.map(x => x.results[0].lexicalEntries[0].entries[0].senses))
      ;

    this.resultSub = this.result.subscribe(() => {
      this.incompleteQuery = false;
    });

    this.synonyms = this.result.pipe(
      rx.map(x => _.slice(_.filter(x, y => y.hasOwnProperty('synonyms')), 0, 3))
    );

    this.antonyms = this.result.pipe(
      rx.map(x => _.slice(_.filter(x, y => y.hasOwnProperty('antonyms')), 0, 3))
    );

    this.incompleteQuery = true;
  }
}
