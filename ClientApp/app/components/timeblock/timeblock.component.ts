import { Component, Input } from '@angular/core';

@Component({
    selector: 'timeblock',
    templateUrl: './timeblock.component.html'
}) 
export class TimeblockComponent {
    public imhere: string ="Hello";
    @Input() hour: string;

    newevent()
    {
        alert("Something!")
    }
}