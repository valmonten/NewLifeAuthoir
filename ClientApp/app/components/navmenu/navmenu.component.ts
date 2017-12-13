import { Component, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    @Output() toshow = new EventEmitter();
    
    hideme(){
        $('.content').slideDown();
    }
    showing(){
        this.toshow.emit();
        $('this.content').slideDown();
    }
}
