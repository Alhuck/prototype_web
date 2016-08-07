import {Component, ViewChild, ContentChild, AfterContentInit} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MENUS} from './services/mock.menus';
import {MdSidenav} from '@angular2-material/sidenav';

@Component({
    selector: 'mobile-header',
    templateUrl: 'app/mblHeader.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [MdIcon, MdToolbar, MdButton,
        MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MdSidenav],
    providers: [MdIconRegistry]
})
export class MblHeader {
    menus: Object[] = MENUS;
    // @ContentChild(FooterComponent) input: FooterComponent;
    // ngAfterContentInit() {
    //     this.input;
    // }
    // showMenu() {
    //     console.dir(this.input);
    // }
}
