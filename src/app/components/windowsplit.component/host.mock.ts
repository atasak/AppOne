import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-windowsplit [resizable]="'resizable'" [direction]="'vertical'">
            <one-window>Hello world 1</one-window>
            <one-window *ngFor="let i of list">NgFor {{i}}</one-window>
            <one-window>
                <one-windowsplit [resizable]="'resizable'">
                    <one-window [size]="25">Horizontal 1</one-window>
                    <one-window [size]="75">Horizontal 1</one-window>
                </one-windowsplit>
            </one-window>
        </one-windowsplit>`,
    selector: 'mock-windowsplit',
})
export class OneWindowSplitHost {
    list = [1, 2];
}
