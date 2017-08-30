import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['../style.less'],
    selector: 'one-sidebar-dropdown',
    animations: [],
})

export class OneSidebarDropdownComponent {
    @Input() title: string;
}
