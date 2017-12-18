import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @Input() showagenda: boolean;
    @Output() toshow = new EventEmitter();
    public depends: string = "abc"
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

    
    showing(){
        $("."+this.weekday+"_a_content").slideDown();
        $("."+this.weekday+"_n_content").slideUp();
        $("."+this.weekday+"_j_content").slideUp();
    }
    parentcheck(){
        
    }
    toggleNotes(){
        $(".content").slideDown();
        $(".content").slideUp();
        $(".content").slideUp();
        
    }
    toggleJournal(){
        $(".journalContent").slideDown();
        $(".notesContent").slideUp();
        $(".agendaContent").slideUp();
    }
    toggleAgenda(){
        $(".journalContent").slideUp();
        $(".notesContent").slideUp();
        $(".agendaContent").slideUp();
    }

}
