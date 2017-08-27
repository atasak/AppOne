import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-sidebar>
            <one-item-group [heading]="'testhead'"></one-item-group>
        </one-sidebar>
    `,
    selector: 'mock-sidebar',
})
export class OneSidebarHost {
}
