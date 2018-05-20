import { Component, OnInit, Provider, APP_INITIALIZER } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguagesResults, UtilityService } from './oxford-dict';
import * as rx from 'rxjs/operators';
import * as _ from 'lodash';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private app_key = '694401321b4b843bca89ddc5cd27a6a8';
  private app_id = '58f5bfc5';

  sourceLanguageId: string = undefined;
  targetLanguageId: string = undefined;

  title = 'Oxford Dictionaries Client';
  languages: Observable<Array<LanguagesResults>>;

  availableSourceLanguages: Observable<Array<string>>;
  availableTargetLanguages: Observable<Array<string>>;
  bilingualDictionaryAvailable = false;

  public constructor(private distUtilService: UtilityService) {}

  ngOnInit(): void {
    this.languages = this.distUtilService.languagesGet(this.app_id, this.app_key)
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
    let obsrv;
    srcOverride = srcOverride || this.sourceLanguageId;
    tgtOverride = tgtOverride || this.targetLanguageId;
    if(!srcOverride || !tgtOverride) {
      obsrv = of(false);
    } else {
      obsrv = this.distUtilService.languagesGet(this.app_id, this.app_key, srcOverride, tgtOverride)
        .pipe(
          rx.map(x => x.results.length > 0)
        );
    }

    obsrv.subscribe(x => console.log(this.bilingualDictionaryAvailable = x));
    obsrv.subscribeOnError(x => { console.log(x); /*throw x;*/ });

    return obsrv;
  }

}
