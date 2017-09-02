import {AfterViewInit, ContentChildren, ElementRef, forwardRef, QueryList} from '@angular/core';
import {OneItemComponent} from './item';

export abstract class ItemList implements AfterViewInit {
    @ContentChildren(forwardRef(() => OneItemComponent)) _items: QueryList<OneItemComponent>;
    items: OneItemComponent[] = [];
    abstract root: ElementRef;

    processItems(items: OneItemComponent[]) {
        this.items = [];
        for (const item of items) {
            if (item.root.nativeElement.parentNode === this.root.nativeElement)
                this.items.push(item);
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this._items.changes.subscribe(() =>
                this.processItems(this._items.toArray()));
            this.processItems(this._items.toArray());
        });
    }
}
