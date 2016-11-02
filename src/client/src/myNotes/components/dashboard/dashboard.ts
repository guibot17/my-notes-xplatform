import {Component} from '@angular/core';

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent{

    public onSearch(queryText: string){
        console.log(queryText);
    }
}
