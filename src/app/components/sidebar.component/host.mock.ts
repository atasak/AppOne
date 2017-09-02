import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-sidebar>
            <one-sidebar-group [heading]="'testhead'" collapsable>
                <one-item *ngFor="let i of [1,2,3,4]" (click)="log('click')" (dblclick)="log('dblclick')">Test {{i}}
                </one-item>
                <one-item *ngIf="showEl">dissappears</one-item>
            </one-sidebar-group>
            <one-sidebar-group [heading]="'Test2'">
                <one-item>Hello</one-item>
                <one-item>Helloo
                    <one-menu context>
                        <one-item>dropdown 1</one-item>
                        <one-item>dropdown 2</one-item>
                        <one-item>dropdown 3</one-item>
                    </one-menu>
                </one-item>
            </one-sidebar-group>
        </one-sidebar>
    `,
    selector: 'mock-sidebar',
})
export class OneSidebarHost implements OnInit {
    showEl = true;

    ngOnInit() {
        setTimeout(() => this.showEl = false, 2000);
    }

    log(x: any) {
        console.log(x);
    }
}
