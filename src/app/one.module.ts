import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {BoundSensorModule} from 'angular-bound-sensor';
import {OneListviewComponent} from './components/listview.component/component';
import {OneNavbarComponent} from './components/navbar.component/component';
import {OnePageComponent} from './components/page.component/component';
import {OneWindowComponent, OneWindowSplitComponent} from './components/windowsplit.component/component';

const components = [OneWindowComponent, OneWindowSplitComponent, OnePageComponent, OneNavbarComponent, OneListviewComponent];

@NgModule({
    declarations: [
        OneWindowComponent, OneWindowSplitComponent, OnePageComponent, OneNavbarComponent, OneListviewComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        BoundSensorModule,
    ],
    exports: components,
    entryComponents: components,
})
export class OneModule {
}
