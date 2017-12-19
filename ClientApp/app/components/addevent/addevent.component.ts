import { Component, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
    selector: 'addevent',
    templateUrl: './addevent.component.html'
}) 
export class AddeventComponent {

    @Input() weekday: string;

    showagenda(){
        $("."+this.weekday+"addevent").slideUp();
        $("."+this.weekday+"timeblocks").slideDown();
    }
    eventadded(){
        $("."+this.weekday+"9am").css("background-color", "black");
        $("."+this.weekday+"addevent").slideUp();
        $("."+this.weekday+"timeblocks").slideDown();

        // $("."+this.weekday+"9am").hover();
    }
    

}