import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @Input() showagenda: boolean;
    @Output() toshow = new EventEmitter();
    // @Input() weekday: string;
    public depends: string = "abc"
    public weekday: string = "Monday";
    
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
