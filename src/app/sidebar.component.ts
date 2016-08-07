import {Component} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {MENUS} from './services/mock.menus';
import {ROUTER_DIRECTIVES} from '@angular/router';



@Component({
    selector: 'sidebar',
    templateUrl: 'app/sidebar.component.html',
    styleUrls:['app/app.component.css'],
    directives:[MdIcon, MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdButton],
    providers:[MdIconRegistry]
})
export class SidebarComponent {
    showMenu: boolean = true;
    menus: Object[] = MENUS;
}
