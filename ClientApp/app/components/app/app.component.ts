import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public Monday: object = {"weekday": "Monday", "monthday": 11}
    public Tuesday: object = {"weekday": "Tuesday", "monthday": 12}
    public Wednesday: object = {"weekday": "Wednesday", "monthday": 13}
    public Thursday: object = {"weekday": "Thursday", "monthday": 14}
    public Friday: object = {"weekday": "Friday", "monday":15}
    public Saturday: object = {"weekday": "Saturday", "monthday": 16}
    public Sunday: object = {"weekday": "Sunday", "monthday": 17}

}
