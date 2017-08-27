import {AfterViewInit, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild} from '@angular/core';

type Direction = 'horizontal' | 'vertical';

@Component({
    moduleId: module.id,
    templateUrl: 'template.window.html',
    styleUrls: ['style.less'],
    selector: 'one-window',
})
export class OneWindowComponent {
    @Input('size') _size = '50';
    get size(): number {
        return Number(this._size);
    }

    @Input() scale: 'scale' | 'no-scale' = 'scale';
    @ViewChild('div') div;

    host: OneWindowSplitComponent;
    windowPercentage = 0;
    dragging = false;
    dragpos: number;

    constructor(public html: ElementRef) {
    }

    get direction(): Direction {
        return this.host ? this.host.direction : 'horizontal';
    }

    getSize(): string {
        return this.host ? this.host.getChildSize(this) : '0px';
    }

    get width(): string {
        return this.direction == 'vertical' ? '100%' : this.getSize();
    }

    get height(): string {
        return this.direction == 'horizontal' ? '100%' : this.getSize();
    }

    style() {
        return {width: this.width, height: this.height};
    }

    pos(e): number {
        return this.direction == 'horizontal' ? e.x : e.y;
    }

    down(e) {
        this.dragging = true;
        this.dragpos = this.pos(e);
    }

    move(e) {
        if (e.buttons % 2 != 1)
            this.dragging = false;
        if (!this.dragging)
            return;
        this.dragpos += this.host.drag(this, this.pos(e) - this.dragpos);
        e.preventDefault();
    }
}

@Component({
    moduleId: module.id,
    templateUrl: 'template.split.html',
    styleUrls: ['style.less'],
    selector: 'one-windowsplit',
})
export class OneWindowSplitComponent implements AfterViewInit {
    @Input() resizable: 'resizable' | 'not-resizable' = 'not-resizable';
    @Input() direction: Direction = 'horizontal';

    @ContentChildren(OneWindowSplitComponent) childSplits: QueryList<OneWindowSplitComponent>;
    @ContentChildren(OneWindowComponent) _frames: QueryList<OneWindowComponent>;
    frames: OneWindowComponent[] = [];
    @ViewChild('div') div;

    get size(): number {
        return {
                horizontal: () => this.div.nativeElement.offsetWidth,
                vertical: () => this.div.nativeElement.offsetHeight,
            }[this.direction]();
    }

    getChildSize(component: OneWindowComponent): string {
        return (this.size * component.windowPercentage / 100) + 'px';
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this._frames.changes.subscribe(() => this.resize());
            this.resize();
        }, 0);
    }

    resize() {
        let total = 0;
        this._frames.map((frame) => {
            if (frame.html.nativeElement.parentNode === this.div.nativeElement) this.frames.push(frame);
        });
        this.frames.map((frame) => frame.host = this);
        this.frames.map((frame) => total += frame.size);
        this.frames.map((frame) => frame.windowPercentage = frame.size * 100 / total);
    }

    drag(component: OneWindowComponent, amount: number): number {
        const upper = component;
        const lower = this.frames[this.frames.indexOf(component) + 1];
        let percentage = amount / this.size * 100;

        if (upper.windowPercentage + percentage < 0)
            percentage = -upper.windowPercentage;
        if (lower.windowPercentage - percentage < 0)
            percentage = lower.windowPercentage;

        upper.windowPercentage += percentage;
        lower.windowPercentage -= percentage;
        return this.size * percentage / 100;
    }
}
