import { Component } from '@angular/core';

@Component({
    selector: 'click-me2',
    template: `
        <button (click)="onClickMe2($event)">No! Click me</button>
        <p>{{clickMessage}}</p>
    `
})

export class ClickMe2Component {
    clickMessage = '';
    clicks = 1;
    onClickMe2 (event: any) {
        let evnMsg = event ? ' Event target is: ' + event.target.tagName : '';
        this.clickMessage = (`Click #${this.clicks++}. ${evnMsg}`)
    }
}