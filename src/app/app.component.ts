import { Component, OnInit, Provider, APP_INITIALIZER } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguagesResults, UtilityService } from './oxford-dict';
import * as rx from 'rxjs/operators';
import * as _ from 'lodash';
import { AppConfig } from './app.config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sourceLanguageId: string = undefined;
  targetLanguageId: string = undefined;

  languages: Observable<Array<LanguagesResults>>;

  availableSourceLanguages: Observable<Array<string>>;
  availableTargetLanguages: Observable<Array<string>>;
  bilingualDictionaryAvailable = false;

  public constructor(private dictUtilService: UtilityService) {}

  ngOnInit(): void {
    this.languages = this.dictUtilService.languagesGet(AppConfig.APP_ID, AppConfig.APP_KEY)
      .pipe(rx.map(x => x.results))
    ;
    this.availableSourceLanguages = this.languages.pipe(
      rx.map(x => _.uniq(
        _.map(
          _.filter(x,
            y => y.sourceLanguage && y.sourceLanguage.id),
            y => y.sourceLanguage.id)))
    );

    this.availableTargetLanguages = this.languages.pipe(
      rx.map(x => _.map(
        _.filter(x,
          y => y.sourceLanguage
              // && (y.sourceLanguage.id === this.sourceLanguageId || !this.sourceLanguageId)
              && y.targetLanguage),
          y => y.targetLanguage.id)
        )
    );
  }

  checkBilingualDictionaryAvailability(srcOverride: string, tgtOverride: string): Observable<boolean> {
    let obsrv: Observable<boolean>;
    srcOverride = srcOverride || this.sourceLanguageId;
    tgtOverride = tgtOverride || this.targetLanguageId;
    if (!srcOverride || !tgtOverride) {
      obsrv = of(false);
    } else {
      obsrv = this.dictUtilService.languagesGet(AppConfig.APP_ID, AppConfig.APP_KEY, srcOverride, tgtOverride)
        .pipe(
          rx.map(x => x.results.length > 0)
        );
    }

    const subscription = obsrv.subscribe(x => {
      console.log(this.bilingualDictionaryAvailable = x);
      if (subscription) { subscription.unsubscribe(); }
    });
    // obsrv.subscribeOnError(x => { console.log(x); /*throw x;*/ });

    // Pretend the dictionary is unavailable until we get a response
    this.bilingualDictionaryAvailable = false;

    return obsrv;
  }

}
