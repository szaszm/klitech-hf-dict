import { Component, OnInit, Input } from '@angular/core';
import { LexicalEntry } from '../oxford-dict';

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

}
