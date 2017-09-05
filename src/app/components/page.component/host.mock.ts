import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-page>
            <one-navbar navbar></one-navbar>
            <mock-sidebar sidebar></mock-sidebar>
            <router-outlet body></router-outlet>
        </one-page>
    `,
    selector: 'mock-page',
})
export class OnePageHost {
}
