import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    // public data: Date;
    private route: ActivatedRoute;
    private redirect: Router;
    public  lastweek : Date;
    


    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {

        http.get(baseUrl + 'api/SampleData/TheGetter').subscribe(result => {
            this.lastweek = result.json(); 
            // console.log(this.lastweek);

        }, error => console.error(error));


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
    forward() {
        var changedate: Array<object> = [this.today];
        // console.log(changedate);
        // var today1 = this.today;
        // var data = new Date(today1.getFullYear(), today1.getMonth(), today1.getDate() + 7);
        this.postDataForward(changedate)  
            .subscribe(  
            (response) => {  
                console.log(response);
                this.list();  
                
            },  
            (error) => console.log(error)  
            );  
    }
    backward() {
        var changedate: Array<object> = [this.today];
        // console.log(changedate);
        // var today1 = this.today;
        // var data = new Date(today1.getFullYear(), today1.getMonth(), today1.getDate() + 7);
        this.postDataBackward(changedate)  
            .subscribe(  
            (response) => {  
                console.log(response);
                this.list();  
                
            },  
            (error) => console.log(error)  
            );  
    }
    postDataBackward(changedate:object) {
        // console.log(changedate);  
        return this.http.post(this.baseUrl+ 'api/SampleData/BackwardSetter', changedate);  
    }  
    postDataForward(changedate:object) {
        // console.log(changedate);  
        return this.http.post(this.baseUrl+ 'api/SampleData/ForwardSetter', changedate);  
    }
    list() {
            location.reload();
        // this.redirect.navigateByUrl('/app');
    }

    clear(){
        return this.http.get(this.baseUrl + 'api/SampleData/Clear').subscribe(result => { 
            this.list();
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