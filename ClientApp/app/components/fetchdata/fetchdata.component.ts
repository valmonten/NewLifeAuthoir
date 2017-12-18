import { Component, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    @Input() weekday: string;
    @Input() monthday: Date;
    @Input() dayarray: Array<Date>;
    
    showdate(){
        var showdate = this.dayarray[3];
        console.log(this.showdate);
    }
     
    
    
    public name : string = "Fetching"

    setchildren(toshow: string){
        console.log("We in Fetch showing " + toshow);
        
    }
    // public weekday: string = this.day[0];
    // public monthday: string = this.day[1];
    



//     toggleNotes(){
//         $(".notesContent").slideDown();
//         $(".journalContent").slideUp();
//         $(".agendaContent").slideUp();
        
//     }
//     toggleJournal(){
//         $(".journalContent").slideDown();
//         $(".notesContent").slideUp();
//         $(".agendaContent").slideUp();
//     }
//     toggleAgenda(){
//         $(".journalContent").slideUp();
//         $(".notesContent").slideUp();
//         $(".agendaContent").slideUp();
//     }
}



