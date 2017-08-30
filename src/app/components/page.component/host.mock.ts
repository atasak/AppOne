import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-page>
            <one-navbar navbar></one-navbar>
            <mock-sidebar sidebar></mock-sidebar>
            <mock-windowsplit body></mock-windowsplit>
        </one-page>
    `,
    selector: 'mock-page',
})
export class OnePageHost {
}
