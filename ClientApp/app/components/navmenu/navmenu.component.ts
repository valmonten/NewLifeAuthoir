import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    @Output() toshow = new EventEmitter();
    @Input() weekday: string;
    @Input() date: Date;

    showing(){
        $("."+this.weekday+"_a_content").slideUp();
        $("."+this.weekday+"_n_content").slideDown();
        $("."+this.weekday+"_j_content").slideUp();
    }
}
