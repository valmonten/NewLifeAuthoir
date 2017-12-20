import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";


@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    @Output() toshow = new EventEmitter();
    @Input() weekday: string;
    @Input() date: Date;
    public detail: object;
    public DisplayNote: Array<string>;
    public dayarray: Array<Date>;
    public Entry: string;
    private route: ActivatedRoute;
    private redirect: Router;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/DayOfWeek').subscribe(result => {
            this.dayarray = result.json();
            
        }, error => console.error(error));
    
        http.get(baseUrl + 'api/SampleData/NoteData').subscribe(result => {
            this.DisplayNote = result.json();
    
            for( let entry in this.dayarray){
                if (this.date == this.dayarray[entry]){
                //fix null exceptions with if statemnt 
                    // console.log(this.DisplayNote[entry])
                    this.Entry = this.DisplayNote[entry];
                    // console.log(this.Entry);
                }
            }
            
        }, error => console.error(error));
    }

    showing(){
        $("."+this.weekday+"_a_content").slideUp();
        $("."+this.weekday+"_n_content").slideDown();
        $("."+this.weekday+"_j_content").slideUp();
    }
    save() {
        var data: Array<object> =[this.detail, this.date]
        // console.log(JSON.stringify(data[1])); 
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

