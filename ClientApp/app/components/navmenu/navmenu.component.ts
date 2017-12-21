import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";
import { dispatchEvent } from '@angular/core/src/view/util';


@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    @Output() toshow = new EventEmitter();
    @Input() weekday: string;
    @Input() date: Date;
    public detail: string;
    public DisplayNote: Array<string>;
    public dayarray: Array<Date>;
    public Entry: string;
    private route: ActivatedRoute;
    private redirect: Router;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/DayOfWeek').subscribe(result => {
            this.dayarray = result.json();
            console.log("Show me the day array "+this.dayarray);
            
        }, error => console.error(error));
    
        http.get(baseUrl + 'api/SampleData/NoteData').subscribe(result => {
            this.DisplayNote = result.json();
            
            if(this.weekday == "Sunday"){
                this.detail= this.DisplayNote[0]
            }
            if(this.weekday == "Monday"){
                this.detail= this.DisplayNote[1]
            }
            if(this.weekday == "Tuesday"){
                this.detail= this.DisplayNote[2]
            }
            if(this.weekday == "Wednesday"){
                this.detail= this.DisplayNote[3]
            }
            if(this.weekday == "Thursday"){
                this.detail= this.DisplayNote[4]
            }
            if(this.weekday == "Friday"){
                this.detail= this.DisplayNote[5]
            }
            if(this.weekday == "Saturday"){
                this.detail= this.DisplayNote[6]
            }
            
            
            // for( let i in this.dayarray){
            //     if (this.date == this.dayarray[i]){
            //     //fix null exceptions with if statemnt 
            //         // console.log(this.DisplayNote[i])
            //         this.Entry = this.DisplayNote[i];
            //         console.log(this.Entry+ " Notes are in this beezy");
            //     }
            // }
            
        }, error => console.error(error));
    }

    showing(){
        $("."+this.weekday+"_a_content").slideUp();
        $("."+this.weekday+"_n_content").slideDown();
        $("."+this.weekday+"_j_content").slideUp();
    }
    save() {
        var data: Array<any> =[this.detail, this.date]
        console.log(JSON.stringify(data[1])); 
        this.postData(data)  
            .subscribe(  
            (response) => {  
                // console.log(response);  
                // this.list(); 
            },  
            (error) => console.log(error)  
            );  
    }  
    postData(data: object) {  
      return this.http.post(this.baseUrl+ 'api/SampleData/SaveNotes', data);  
    }  
    
    // list() {  
    //   this.redirect.navigateByUrl('/navmenu');  
    // } 
    }
    export class Note{
        idnotes: number;
        mynotes: String;
        created_at: Date;
        updated_at: Date;
        users_id: number;
        calendarid: number;
    }

