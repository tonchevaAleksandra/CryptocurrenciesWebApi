import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h3 class="main-title">
        <span>{{appTitle}}</span>
    </h3>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() appTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}