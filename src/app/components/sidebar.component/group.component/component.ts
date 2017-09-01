import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['../style.less'],
    selector: 'one-sidebar-group',
    animations: [
        trigger('groupFolding', [
            transition(':leave', [
                style({height: '*'}),
                animate('300ms ease-out', style({height: '0'})),
            ]),
            transition(':enter', [
                style({height: '0'}),
                animate('300ms ease-out', style({height: '*'})),
            ]),
        ]),
        trigger('caret', [
            state('open', style({
                transform: 'rotate(0deg)',
            })),
            state('closed', style({
                transform: 'rotate(90deg)',
            })),
            transition('open => closed',
                animate('300ms ease'),
            ),
            transition('closed => open',
                animate('300ms ease'),
            ),
        ]),
    ],
})

export class OneSidebarGroupComponent {
    @Input() heading: string;
    @Input() collapsable: '' | 'false' = 'false';

    open = true;
    caret = 'open';

    click() {
        if (this.collapsable !== 'false') {
            this.open = !this.open;
            this.caret = this.open ? 'open' : 'closed';
        }
    }
}