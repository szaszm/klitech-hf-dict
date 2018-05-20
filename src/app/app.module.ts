import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule, Configuration, BASE_PATH } from './oxford-dict/index';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSelect, MatSelectModule, MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TransformPipe } from './transform.pipe';
import { UniqPipe } from './uniq.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TransformPipe,
    UniqPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ApiModule,
    NoopAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule
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
