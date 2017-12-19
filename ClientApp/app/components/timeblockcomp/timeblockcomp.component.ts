import { Component, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
    selector: 'timeblockcomp',
    templateUrl: './timeblockcomp.component.html'
}) 
export class TimeblockcompComponent {
    
    @Input() weekday: string;

    public x1: string = "1am"
    public x2: string = "2am"
    public x3: string = "3am"
    public x4: string = "4am"
    public x5: string = "5am"
    public x6: string = "6am"
    public x7: string = "7am"
    public x8: string = "8am"
    public x9: string = "9am"
    public x10: string = "10am"
    public x11: string = "11am"
    public x12: string = "12pm"
    public x13: string = "1pm"
    public x14: string = "2pm"
    public x15: string = "3pm"
    public x16: string = "4pm"
    public x17: string = "5pm"
    public x18: string = "6pm"
    public x19: string = "7pm"
    public x20: string = "8pm"
    public x21: string = "9pm"
    public x22: string = "10pm"
    public x23: string = "11pm"
    public x24: string = "12am"

    newagenda(){
        
            
            $("."+this.weekday+"addevent").slideDown();
            $("."+this.weekday+"timeblocks").slideUp();
        
    }


    

}