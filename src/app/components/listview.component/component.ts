import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';

export class Slice {
    first: number;
    length: number;
}

@Component({
    moduleId: module.id,
    templateUrl: 'template.html',
    styleUrls: ['style.scss'],
    selector: 'one-listview',
})
export class OneListviewComponent {
    _itemsize = 0;
    @Input()
    set itemsize(x: number) {
        this._itemsize = x;
        this.scroll();
    };

    get itemsize(): number {
        return this._itemsize;
    }

    _items = 0;
    @Input()
    set items(x: number) {
        this._items = x;
        this.scroll();
    };

    get items(): number {
        return this._items;
    }

    _headheight = 0;
    @Input()
    set headheight(x: number) {
        this._headheight = x;
        this.scroll();
    };

    get headheight(): number {
        return this._headheight;
    }

    @Output() update = new EventEmitter<Slice>();

    currentSlice: Slice = {first: 0, length: 0};

    @ViewChild('viewport') viewPort: ElementRef = null;
    top = '0px';

    get height() {
        return (this.itemsize * (this.items + 1)) + 'px';
    }

    @HostListener('resize', ['$event.detail'])
    scroll() {
        const scrollTop = this.viewPort.nativeElement.scrollTop;
        const height = this.viewPort.nativeElement.offsetHeight - this.headheight;
        this.top = scrollTop + 'px';
        const first = Math.floor(scrollTop / this.itemsize);
        const length = this.length(first, height);
        if (this.currentSlice.first !== first || this.currentSlice.length !== length)
            this.update.emit({first: first, length: length});
        this.currentSlice = {first: first, length: length};
    }

    length(first: number, height: number): number {
        const displayItems = Math.ceil(height / this.itemsize);
        if (first + displayItems >= this.items)
            return this.items - first;
        return displayItems;
    }
}
