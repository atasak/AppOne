import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OneWindowComponent, OneWindowSplitComponent} from './components/windowsplit.component/component';
import {OneSidebarComponent} from './components/sidebar.component/component';
import {OnePopupComponent} from './components/popup.component/component';
import {OneNavbarComponent} from './components/navbar.component/component';
import {OneWindowSplitHost} from './components/windowsplit.component/host.mock';
import {OnePageComponent} from './components/page.component/component';
import {OnePageHost} from './components/page.component/host.mock';
import {OneItemGroupComponent} from './components/sidebar.component/group.component/component';
import {OneSidebarHost} from './components/sidebar.component/host.mock';

@NgModule({
    declarations: [
        OneWindowSplitComponent, OneWindowComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent, OneWindowSplitHost, OnePageComponent, OnePageHost, OneItemGroupComponent, OneSidebarHost,
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        OnePageHost
    ],
    exports: [
        OnePopupComponent, OneNavbarComponent, OneSidebarComponent, OneWindowSplitComponent, OneWindowComponent,
    ],
})
export class AppModule {
}
