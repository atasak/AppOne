import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OneNavbarComponent} from './components/navbar.component/component';
import {OnePageComponent} from './components/page.component/component';
import {OnePageHost} from './components/page.component/host.mock';
import {OnePopupComponent} from './components/popup.component/component';
import {OneSidebarComponent} from './components/sidebar.component/component';
import {OneSidebarDropdownComponent} from './components/sidebar.component/dropdown.component/component';
import {OneSidebarGroupComponent} from './components/sidebar.component/group.component/component';
import {OneSidebarHost} from './components/sidebar.component/host.mock';
import {OneWindowComponent, OneWindowSplitComponent} from './components/windowsplit.component/component';
import {OneWindowSplitHost} from './components/windowsplit.component/host.mock';

const components = [OneWindowComponent, OneWindowSplitComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent,
    OnePageComponent, OneSidebarGroupComponent, OneSidebarDropdownComponent];

@NgModule({
    declarations: [
        OneWindowComponent, OneWindowSplitComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent,
        OnePageComponent, OneSidebarGroupComponent, OneWindowSplitHost, OnePageHost, OneSidebarHost, OneSidebarDropdownComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [
        OnePageHost,
    ],
    exports: components,
    entryComponents: components,
})
export class AppModule {
}
