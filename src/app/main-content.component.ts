import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSidenav} from '@angular2-material/sidenav';

@Component({
    selector: 'center-content',
    templateUrl: 'app/main-content.component.html',
    styleUrls: ['app/app.component.css'],
    directives:[ROUTER_DIRECTIVES, MdToolbar, MdSidenav],
    providers:[]
})
export class MainContent {
    
}