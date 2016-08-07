import {Component} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'footer',
    templateUrl: 'app/footer.component.html',
    styleUrls: ['app/app.component.css'],
    directives:[MdIcon, MdToolbar],
    providers:[MdIconRegistry]
})
export class FooterComponent {
    
}