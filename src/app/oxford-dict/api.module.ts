import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { DictionaryEntriesService } from './api/dictionaryEntries.service';
import { LemmatronService } from './api/lemmatron.service';
import { LexiStatsService } from './api/lexiStats.service';
import { SearchService } from './api/search.service';
import { TheSentenceDictionaryService } from './api/theSentenceDictionary.service';
import { ThesaurusService } from './api/thesaurus.service';
import { TranslationService } from './api/translation.service';
import { UtilityService } from './api/utility.service';
import { WordlistService } from './api/wordlist.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    DictionaryEntriesService,
    LemmatronService,
    LexiStatsService,
    SearchService,
    TheSentenceDictionaryService,
    ThesaurusService,
    TranslationService,
    UtilityService,
    WordlistService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
