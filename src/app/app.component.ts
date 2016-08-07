import { Component} from '@angular/core';
import {MdSidenav} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FooterComponent} from './footer.component';
import {SidebarComponent} from './sidebar.component';
import {MainContent} from './main-content.component';
import {MblHeader} from './mblHeader.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MdSidenav, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES,
        FooterComponent, SidebarComponent, MainContent, MblHeader],
    providers: [],
})
export class AppComponent {

}
