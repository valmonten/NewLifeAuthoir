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
    private route: ActivatedRoute;
    private redirect: Router;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
    }

    showing(){
        $("."+this.weekday+"_a_content").slideUp();
        $("."+this.weekday+"_n_content").slideDown();
        $("."+this.weekday+"_j_content").slideUp();
    }
    save() {
        var data: Array<object> =[this.detail, this.date]
        console.log(JSON.stringify(data[1])); 
        this.postData(data)  
            .subscribe(  
            (response) => {  
                console.log(response);  
                this.list(); 
            },  
            (error) => console.log(error)  
            );  
    }  
    postData(data: object) {  
      return this.http.post(this.baseUrl+ 'api/SampleData/SaveNotes', data);  
    }  
    
    list() {  
      this.redirect.navigateByUrl('/navmenu');  
    } 
    }
    export class Note{
        idnotes: number;
        mynotes: String;
        created_at: Date;
        updated_at: Date;
        users_id: number;
        calendarid: number;
    }

