import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @Input() showagenda: boolean;
    @Output() toshow = new EventEmitter();
    
    showing(){
        this.toshow.emit();
        console.log("Activate in home")
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
