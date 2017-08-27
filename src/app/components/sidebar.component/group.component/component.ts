import {Component, Injectable, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['../style.less'],
    selector: 'one-item-group',
})
export class OneItemGroupComponent {
    @Input() heading: string;
    @Input() collapsable = false;
}
