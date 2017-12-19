import { Component, Input } from '@angular/core';
import * as $ from "jquery";


@Component({
    selector: 'timeblock',
    templateUrl: './timeblock.component.html'
}) 
export class TimeblockComponent {
    public imhere: string ="Hello";
    @Input() hour: string;
    @Input() weekday: string;
    

    //'<form><label>Time: <input type="text" name="time"></label><label>Title: <input type="text" name="title"></label><label>Description:<textarea></textarea></label><select name="genre"><option value="Work">Work</option><option value="Social">Social</option><option value="Health">Health</option><option value="Financial">Financial</option>      <option value="Spiritual">Spiritual</option><option value="Intellectual">Intellectual</option></select><input type="submit" value="Submit"></form>')

}
interface Agenda{
    id: number;
    title: string;
    description: string;
    category: string;
    importance: number;
    ugency: number;
    start: Date;
    end: Date;
    users_id: number;
    calendar_dateid: number;
}