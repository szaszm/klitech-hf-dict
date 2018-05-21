import { Component, OnInit, Input } from '@angular/core';
import { UtilityService, LemmatronService, Lemmatron, TranslationService, HeadwordLemmatron, HeadwordEntry, SearchService, Wordlist, WordlistResults, LexicalEntry } from '../oxford-dict';
import { AppConfig } from '../app.config';
import { Observable, Subscription } from 'rxjs';
import * as rx from 'rxjs/operators';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  public query: string;
  @Input() sourceLanguageId: string;
  @Input() targetLanguageId: string;

  public results: Observable<LexicalEntry[]>;

  constructor(private searchService: SearchService, private translationService: TranslationService) {}

  ngOnInit() {
  }

  doTranslate(): void {
    this.results = this.searchService.searchSourceSearchLanguageTranslationstargetSearchLanguageGet(
        this.sourceLanguageId, this.targetLanguageId, AppConfig.APP_ID, AppConfig.APP_KEY, this.query, false,
        undefined, '1'
      ).pipe(
        rx.map(x => x.results[0]),
        rx.flatMap(x =>
          this.translationService.entriesSourceTranslationLanguageWordIdTranslationstargetTranslationLanguageGet(
            this.sourceLanguageId, x.word, this.targetLanguageId, AppConfig.APP_ID, AppConfig.APP_KEY
          ).pipe(rx.map(y => y.results[0].lexicalEntries))
        )
      );
  }

}
