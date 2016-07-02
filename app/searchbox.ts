import {Component,OnInit} from 'angular2/core';
import {Directive} from 'angular2/core';
import {EventEmitter, ElementRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Github}       from './github';
import {GithubService} from './github.service';

import { Observable } from 'rxjs/Observable';





@Component({
    outputs: ['results'],
    selector: 'search-box',
    template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBox implements OnInit {
    results: EventEmitter<Github[]> = new EventEmitter<Github[]>();

    constructor(public github: GithubService,
                private el: ElementRef) {
    }

    ngOnInit(): void {
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value) // extract the value of the input
            .filter((text: string) => text.length > 1) // filter out if empty
            .debounceTime(250)                         // only once every 250ms
            //.do(() => this.loading.next(true))         // enable loading
            // search, discarding old events if new input comes in
            .map((query: string) => this.github.getGithub(query))
            .switch()
            // act on the return of the search
            .subscribe(
                (results: Github[]) => { // on sucesss
                   
                    this.results.next(results);
                },
                (err: any) => { // on error
                    console.log(err);
                    
                },
                () => { // on completion
                   
                }
            );

    }
}