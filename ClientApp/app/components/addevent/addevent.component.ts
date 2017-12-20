import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";



@Component({
    selector: 'addevent',
    templateUrl: './addevent.component.html'
}) 
export class AddeventComponent {

    @Input() weekday: string;
    @Input() date: Date;
    public newevent: Agenda = new Agenda();
    agendaitems: Agenda[] = [];
    @Output() newagendaemitter = new EventEmitter();
    private route: ActivatedRoute;
    private redirect: Router;
    

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {}
    
    

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
        // console.log(this.agendaitems);
        this.newagendaemitter.emit(holder);
        this.newevent = new Agenda();
    }

    save() {
        var data: Array<any> =[this.date, this.newevent.title, this.newevent.description, this.newevent.category, this.newevent.start, this.newevent.end]
        console.log(JSON.stringify(data[0])); 
        console.log(JSON.stringify(data[1])); 
        console.log(JSON.stringify(data[2])); 
        console.log(JSON.stringify(data[3])); 
        console.log(JSON.stringify(data[4])); 
        console.log(JSON.stringify(data[5])); 
        this.postData(data)  
            .subscribe(  
            (response) => {  
                console.log(response);  
                // this.list(); 
            },  
            (error) => console.log(error)  
            );  
    }  
    postData(data: object) {  
      return this.http.post(this.baseUrl+ 'api/SampleData/SaveNewEvent', data);  
    }
    

}
export class Agenda
{
    id: number;
    title: string;
    description: string;
    category: string;
    start: Date;
    end: Date;
    users_id: number;
    calendarid: number;
}