import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule, Configuration, BASE_PATH } from './oxford-dict/index';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule,
  MatSelect,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule, 
  MatGridListModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { TransformPipe } from './transform.pipe';
import { UniqPipe } from './uniq.pipe';
import { FilterPipe } from './filter.pipe';
import { TranslateComponent } from './translate/translate.component';
import { LexicalEntryComponent } from './lexical-entry/lexical-entry.component';
import { SynonymComponent } from './synonym/synonym.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TransformPipe,
    UniqPipe,
    FilterPipe,
    TranslateComponent,
    LexicalEntryComponent,
    SynonymComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    NoopAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: BASE_PATH,
      useValue: 'https://oxdict.szasz.ninja/api/v1'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
