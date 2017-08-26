import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-page>
            <one-navbar></one-navbar>
            <one-sidebar></one-sidebar>
            <mock-windowsplit body></mock-windowsplit>
        </one-page>
    `,
    selector: 'mock-page',
})
export class OnePageHost {
}
