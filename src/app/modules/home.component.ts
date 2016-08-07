import {Component} from '@angular/core';
import {MdCard} from '@angular2-material/card';

@Component({
    templateUrl: 'app/modules/home.component.html',
    styleUrls: ['app/app.component.css'],
    directives:[MdCard]
})
export class HomeComponent {
    title: String = 'Home'
}