import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public dateObject: Calendar;
    public today: Date;
    public weekday: Date;
    public resulting: any;
    public currentweek: Array<number>;
    public dayarray: Array<Date>;
    //public daybefore :Date;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/CalendarData').subscribe(result => {
            this.dateObject = result.json() as Calendar;
            this.today = result.json().dt;
            this.weekday = result.json().dw;
            this.resulting = result.json();
            // this.daybefore = result.json().dt;

           
        }, error => console.error(error));

        http.get(baseUrl + 'api/SampleData/TheWeek').subscribe(result => {
            this.currentweek = result.json(); 

        }, error => console.error(error));

        http.get(baseUrl + 'api/SampleData/DayOfWeek').subscribe(result => {
            this.dayarray = result.json(); 

        }, error => console.error(error));

    

    }

    public Sunday: string = "Sunday"
    public monthday1: Date = this.today;

    public Monday: string = "Monday"
    public monthday2: Date = this.today;

    public Tuesday: string = "Tuesday"
    public monthday3: Date = this.today;

    public Wednesday: string = "Wednesday"
    public monthday4: Date = this.today;

    public Thursday: string = "Thursday"
    public monthday5: Date = this.today;

    public Friday: string = "Friday"
    public monthday6: Date = this.today;

    public Saturday: string = "Saturday"
    public monthday7: Date = this.today;

}

interface Calendar{
    calendarid: number;
    dt: Date;
    y: number;
    q: number;
    m: number;
    d: number;
    dw: number;
    monthName: string;
    dayName: string;
    w: number;



}