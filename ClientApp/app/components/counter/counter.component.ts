import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
@Input() weekday: string;

showing(){
    $("."+this.weekday+"_a_content").slideUp();
    $("."+this.weekday+"_n_content").slideUp();
    $("."+this.weekday+"_j_content").slideDown();
}
}

