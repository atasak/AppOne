import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <one-sidebar>
            <one-sidebar-group [heading]="'testhead'" collapsable>
                <li><a>Test 1</a></li>
                <li><a>Test 2</a></li>
                <li><a>Test 3</a></li>
            </one-sidebar-group>
            <one-sidebar-group [heading]="'Test2'">
                <li><a>Hello</a></li>
                <li><a>Helloo</a></li>
                <li class="dropdown">
                    <one-sidebar-dropdown title="dropdown"></one-sidebar-dropdown>
                </li>
            </one-sidebar-group>
        </one-sidebar>
    `,
    selector: 'mock-sidebar',
})
export class OneSidebarHost {
}
