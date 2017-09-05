import {animate, state, style, transition, trigger} from '@angular/animations';
import {AfterViewInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {BinaryAttibute} from '../../types';
import {OneItemComponent} from '../common/item';

@Component({
    moduleId: module.id,
    templateUrl: '../common/content.html',
    styleUrls: ['style.scss'],
    selector: 'one-sidebar-group',
})
export class OneSidebarGroupComponent implements AfterViewInit {
    @Input() heading: string;
    @Input() collapsable: BinaryAttibute = 'false';

    open = true;
    caret = 'open';

    @ContentChildren(OneItemComponent) _items: QueryList<OneItemComponent>;
    items: OneItemComponent[] = [];

    click() {
        if (this.collapsable !== 'false') {
            this.open = !this.open;
            this.caret = this.open ? 'open' : 'closed';
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this._items.changes.subscribe(() =>
                this.items = this._items.toArray());
            this.items = this._items.toArray();
        });
    }
}

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['style.scss'],
    selector: 'one-sidebar',
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
export class OneSidebarComponent implements AfterViewInit {
    @ContentChildren(OneSidebarGroupComponent) _groups: QueryList<OneSidebarGroupComponent>;
    groups: OneSidebarGroupComponent[] = [];

    ngAfterViewInit() {
        setTimeout(() => {
            this._groups.changes.subscribe(() =>
                this.groups = this._groups.toArray());
            this.groups = this._groups.toArray();
        });
    }
}

