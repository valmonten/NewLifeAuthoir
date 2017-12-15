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
    public Sunday: string = "Sunday";
    public monthday1: Date;

    public Monday: string = "Monday";
    public monthday2: Date;

    public Tuesday: string = "Tuesday";
    public monthday3: Date;

    public Wednesday: string = "Wednesday";
    public monthday4: Date;

    public Thursday: string = "Thursday";
    public monthday5: Date;

    public Friday: string = "Friday";
    public monthday6: Date;

    public Saturday: string = "Saturday";
    public monthday7: Date;

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
            this.monthday1 = result.json()[0];
            this.monthday2 = result.json()[1];
            this.monthday3 = result.json()[2];
            this.monthday4 = result.json()[3];
            this.monthday5 = result.json()[4];
            this.monthday6 = result.json()[5];
            this.monthday7 = result.json()[6];
            

        }, error => console.error(error));

    

    }

    


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