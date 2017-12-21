import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";


@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
@Input() weekday: string;
@Input() date: Date;
public detail: string;
public DisplayJournal: Array<string>;
public dayarray: Array<Date>;
public Entry: string;
private route: ActivatedRoute;
private redirect: Router;

constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
    
    http.get(baseUrl + 'api/SampleData/DayOfWeek').subscribe(result => {
        this.dayarray = result.json();
        
    }, error => console.error(error));

    http.get(baseUrl + 'api/SampleData/JournalData').subscribe(result => {
        this.DisplayJournal = result.json();

        if(this.weekday=="Sunday"){
            this.detail= this.DisplayJournal[0]
        }
        if(this.weekday=="Monday"){
            this.detail= this.DisplayJournal[1]
        }

        if(this.weekday=="Tuesday"){
            this.detail= this.DisplayJournal[2]
        }

        if(this.weekday=="Wednesday"){
            this.detail= this.DisplayJournal[3]
        }

        if(this.weekday=="Thursday"){
            this.detail= this.DisplayJournal[4]
        }

        if(this.weekday=="Friday"){
            this.detail= this.DisplayJournal[5]
        }

        if(this.weekday=="Saturday"){
            this.detail= this.DisplayJournal[6]
        }


        
        
    }, error => console.error(error));

    
    
}

showing(){
    $("."+this.weekday+"_a_content").slideUp();
    $("."+this.weekday+"_n_content").slideUp();
    $("."+this.weekday+"_j_content").slideDown();
}
save() {
    var data: Array<any> =[this.detail, this.date]
    // console.log(JSON.stringify(data[0])); 
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
  return this.http.post(this.baseUrl+ 'api/SampleData/SaveJournal', data);  
}  

// list() {  
//   this.redirect.navigateByUrl('/counter');  
// } 




}


export class Journal{
    idjournals: number;
    contents: String;
    created_at: Date;
    updated_at: Date;
    users_id: number;
    calendarid: number;
}
