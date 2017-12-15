import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public thedate: Calendar;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/CalendarData').subscribe(result => {
            this.thedate = result.json() as Calendar;

           
        }, error => console.error(error));

    }

    public Monday: string = "Monday"
    public monthday1: number = 11;

    public Tuesday: string = "Tuesday"
    public monthday2: number = 12;

    public Wednesday: string = "Wednesday"
    public monthday3: number = 13;

    public Thursday: string = "Thursday"
    public monthday4: number = 14;

    public Friday: string = "Friday"
    public monthday5: number = 15;

    public Saturday: string = "Saturday"
    public monthday6: number = 16;

    public Sunday: string = "Sunday"
    public monthday7: number = 17;

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