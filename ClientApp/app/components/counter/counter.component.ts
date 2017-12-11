import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public person: Users;

    
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/Usersdata').subscribe(result => {
            this.person = result.json() as Users;
        }, error => console.error(error));
    }
}
interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    
}

