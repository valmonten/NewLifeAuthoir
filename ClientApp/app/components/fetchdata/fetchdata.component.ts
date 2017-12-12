import { Component, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    @Input() weekday: string;
    toggleNotes_m(){
        $(".notesContent_m").slideDown();
        $(".journalContent_m").slideUp();
        $(".agendaContent_m").slideUp();
        console.log("Notes")
    }
    toggleJournal_m(){
        $(".journalContent_m").slideDown();
        $(".notesContent_m").slideUp();
        $(".agendaContent_m").slideUp();
    }
    toggleAgenda_m(){
        $(".journalContent_m").slideUp();
        $(".notesContent_m").slideUp();
        $(".agendaContent_m").slideDown();
    }
}

