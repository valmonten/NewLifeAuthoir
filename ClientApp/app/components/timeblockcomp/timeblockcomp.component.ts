import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";
import { Agenda } from '../addevent/addevent.component';

@Component({
    selector: 'timeblockcomp',
    templateUrl: './timeblockcomp.component.html'
}) 
export class TimeblockcompComponent {
    
    @Input() weekday: string;
    @Input() date: Date;
    @Input() agendalist: Agenda[];
    public eventList: Agenda[];
    public dayarray: Array<Date>;
    public eventlist0title: string;    
    private route: ActivatedRoute;
    private redirect: Router;


    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {

        http.get(baseUrl + 'api/SampleData/DayOfWeek').subscribe(result => {
            this.dayarray = result.json();
            
        }, error => console.error(error));
        
        http.get(baseUrl + 'api/SampleData/BuildAgenda').subscribe(result => {
            if(this.weekday == "Sunday"){

                this.eventList = result.json()[0];
            }
            if(this.weekday == "Monday"){

                this.eventList = result.json()[1];
            }
            if(this.weekday == "Tuesday"){

                this.eventList = result.json()[2];
            }
            if(this.weekday == "Wednesday"){

                this.eventList = result.json()[3];
            }
            if(this.weekday == "Thursday"){

                this.eventList = result.json()[4];
            }
            if(this.weekday == "Friday"){

                this.eventList = result.json()[5];
            }
            if(this.weekday == "Saturday"){

                this.eventList = result.json()[6];
            }
            
        }, error => console.error(error));
    }

    newagenda(){
        
            
            $("."+this.weekday+"addevent").slideDown();
            $("."+this.weekday+"timeblocks").slideUp();
        
    }
    agendalisting(){
        console.log("We in timeblock");
        console.log(this.agendalist);
    }
    showdetails(something: string)
    {
        console.log(this.agendalist[0].category);
        $("."+something+this.weekday).slideToggle();
    }

}
