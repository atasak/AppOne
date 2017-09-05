import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {OneItemComponent} from './components/common/item';
import {OneMenuComponent, OneMenuDisplayComponent} from './components/menu.component/component';
import {OneNavbarComponent} from './components/navbar.component/component';
import {OnePageComponent} from './components/page.component/component';
import {OnePageHost} from './components/page.component/host.mock';
import {OnePopupComponent} from './components/popup.component/component';
import {OneSidebarComponent, OneSidebarGroupComponent} from './components/sidebar.component/component';
import {OneSidebarHost} from './components/sidebar.component/host.mock';
import {OneWindowComponent, OneWindowSplitComponent} from './components/windowsplit.component/component';
import {OneWindowSplitHost} from './components/windowsplit.component/host.mock';

const components = [OneWindowComponent, OneWindowSplitComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent,
    OnePageComponent, OneSidebarGroupComponent, OneItemComponent, OneMenuComponent, OneMenuDisplayComponent];

const appRoutes: Routes = [
    {
        path: '**',
        component: OneWindowSplitHost,
    },
];

@NgModule({
    declarations: [
        OneWindowComponent, OneWindowSplitComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent,
        OnePageComponent, OneWindowSplitHost, OnePageHost, OneSidebarHost, OneSidebarGroupComponent, OneItemComponent,
        OneMenuComponent, OneMenuDisplayComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
    ],
    bootstrap: [
        OnePageHost,
    ],
    exports: components,
    entryComponents: components,
})
export class OneModule {
}
