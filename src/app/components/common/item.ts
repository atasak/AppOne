import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    Output,
    QueryList,
} from '@angular/core';
import {OneMenuComponent} from '../menu.component/component';

@Component({
    moduleId: module.id,
    templateUrl: 'content.html',
    selector: 'one-item',
})
export class OneItemComponent implements AfterViewInit {
    @Output() click = new EventEmitter<MouseEvent>();
    @Output() dblclick = new EventEmitter<MouseEvent>();
    @Output() context = new EventEmitter<MouseEvent>();

    @ContentChildren(forwardRef(() => OneMenuComponent)) menus: QueryList<OneMenuComponent>;
    dropdown: OneMenuComponent = null;
    contextmenu: OneMenuComponent = null;

    constructor(public root: ElementRef) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.menus.forEach((menu: OneMenuComponent) => {
                if (menu.dropdown !== 'false')
                    this.dropdown = menu;
                if (menu.context !== 'false')
                    this.contextmenu = menu;
            });
        });
    }

    get text() {
        const text = this.root.nativeElement.innerHTML;
        const index = text.indexOf('<one-menu');
        if (index === -1)
            return text;
        return text.substr(0, index);
    }

    clickEvent(e: MouseEvent) {
        if (this.dropdown)
            this.dropdown.click(e);
        else
            this.click.emit(e);
        e.preventDefault();
    }

    dblclickEvent(e: MouseEvent) {
        this.dblclick.emit(e);
        e.preventDefault();
    }

    contextEvent(e: MouseEvent) {
        if (this.contextmenu)
            this.contextmenu.click(e);
        else
            this.context.emit(e);
        e.preventDefault();
    }
}
