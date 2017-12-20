import { Component, Input } from '@angular/core';
import * as $ from "jquery";
import { Agenda } from '../addevent/addevent.component';

@Component({
    selector: 'timeblockcomp',
    templateUrl: './timeblockcomp.component.html'
}) 
export class TimeblockcompComponent {
    
    @Input() weekday: string;
    @Input() agendalist: Agenda[];
    

    newagenda(){
        
            
            $("."+this.weekday+"addevent").slideDown();
            $("."+this.weekday+"timeblocks").slideUp();
        
    }
    agendalisting(){
        console.log("We in timeblock");
        console.log(this.agendalist);
    }
    showdetails(something: any)
    {
        console.log(something);
        $("."+something+this.weekday).slideToggle();
    }

}
