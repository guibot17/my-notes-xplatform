import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'search-box',
    templateUrl: 'search.html'
})
export class SearchComponent{

    @Output() public onSearchRequested: EventEmitter<string> = new EventEmitter<string>();

    public queryText: string;

    public executeSearch(keyCode: number){
        if(keyCode === 13){
            this.onSearchRequested.emit(this.queryText);
        }
    }

}
