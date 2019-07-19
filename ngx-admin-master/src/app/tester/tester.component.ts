import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './tester-menu';
@Component({
  selector: 'ngx-Tester',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,

})
export class TesterComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor(
    private router: Router

  ) { }
  ngOnInit() {

  }



}
