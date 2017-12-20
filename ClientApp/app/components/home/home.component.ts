import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";
import { Agenda } from '../addevent/addevent.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    
    @Input() date: Date;
    @Input() weekday: string;
    public agendalist: Agenda[];
    

    
    showing(){
        $("."+this.weekday+"_a_content").slideDown();
        $("."+this.weekday+"_n_content").slideUp();
        $("."+this.weekday+"_j_content").slideUp();
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
    datafromchild(data: any[])
    {
        // console.log("This has been triggered in home")
        // console.log(data);
        this.agendalist = data[0];
    }

}
