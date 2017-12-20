import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";



@Component({
    selector: 'addevent',
    templateUrl: './addevent.component.html'
}) 
export class AddeventComponent {

    @Input() weekday: string;
    public newevent: Agenda = new Agenda();
    agendaitems: Agenda[] = [];
    @Output() newagendaemitter = new EventEmitter();
    


    
    

    showagenda(){
        $("."+this.weekday+"addevent").slideUp();
        $("."+this.weekday+"timeblocks").slideDown();
    }
    eventadded(){
        
        this.agendaitems.push(this.newevent);
        var holder= [];
        holder[0] = this.agendaitems;
        holder[1] = this.weekday;
        $("."+this.weekday+"addevent").slideUp();
        $("."+this.weekday+"timeblocks").slideDown();
        console.log(this.agendaitems);
        this.newagendaemitter.emit(holder);
        this.newevent = new Agenda();
    }
    

}
export class Agenda
{
    id: number;
    title: string;
    start: string;
    end: string;
    description: string;
    category: string;
}