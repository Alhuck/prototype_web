import { Component } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdGridList} from '@angular2-material/grid-list';
import {MdSidenav} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MdButton, MdGridList, MdToolbar, MdSlideToggle, MdSidenav,MdIcon,
    MD_LIST_DIRECTIVES],
  providers: [MdIconRegistry],
})
export class AppComponent {
  menus: any [] = [
      {
       name: "Home",
       description: "home"   
      },
      {
       name: "Dashboard",
       description: "dashboard"   
      }
  ]
}
