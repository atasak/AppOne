import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {BinaryAttibute} from '../../types';
import {ItemList} from '../common/itemlist';

@Component({
    moduleId: module.id,
    templateUrl: '../common/content.html',
    selector: 'one-menu',
})
export class OneMenuComponent extends ItemList implements AfterViewInit {
    @Input() dropdown: BinaryAttibute = 'false';
    @Input() context: BinaryAttibute = 'false';

    open = false;

    top = '0px';
    left = '0px';

    constructor(public root: ElementRef) {
        super();
    }

    click(e: MouseEvent) {
        this.open = true;
        this.top = (e.y - 16) + 'px';
        this.left = (e.x - 16) + 'px';
    }

    close(e) {
        this.open = false;
    }

}

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['style.scss'],
    selector: 'one-menu-display',
})
export class OneMenuDisplayComponent {
    @Input() model: OneMenuComponent;

    constructor(private root: ElementRef) {
    }

    close(e) {
        if (!this.root.nativeElement.parentNode.contains(e.srcElement))
            this.model.close(e);
    }
}
