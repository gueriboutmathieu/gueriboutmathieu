import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const left = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
    ]),
];

const right = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))], {
            optional: true,
        }),
    ]),
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('animRoutes', [
            transition(':increment', right),
            transition(':decrement', left),
        ]),
    ],
})
export class AppComponent implements OnInit {

    animationState: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { }

    onActivate($event) {
        this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
    }
}
