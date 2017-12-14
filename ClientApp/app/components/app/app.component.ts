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

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/CalendarData').subscribe(result => {
            this.dateObject = result.json() as Calendar;
            this.today = result.json().dt;
            this.weekday = result.json().dw;
            this.resulting = result.json();

           
        }, error => console.error(error));

    }

    public Monday: string = "Monday"
    public monthday1 = 5;

    public Tuesday: string = "Tuesday"
    public monthday2: Date = this.today;

    public Wednesday: string = "Wednesday"
    public monthday3: Date = this.today;

    public Thursday: string = "Thursday"
    public monthday4: Date = this.today;

    public Friday: string = "Friday"
    public monthday5: Date = this.today;

    public Saturday: string = "Saturday"
    public monthday6: Date = this.today;

    public Sunday: string = "Sunday"
    public monthday7: Date = this.today;

}

interface Calendar{
    calendarid: Date;
    dt: Date;
    y: Date;
    q: Date;
    m: Date;
    d: Date;
    dw: Date;
    monthName: string;
    dayName: string;
    w: Date;



}