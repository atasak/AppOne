import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OneWindowSplitComponent} from './components/windowsplit.component/component';
import {OneSidebarComponent} from './components/sidebar.component/component';
import {OnePopupComponent} from './components/popup.component/component';
import {OneNavbarComponent} from './components/navbar.component/component';


@NgModule({
  declarations: [
    OneWindowSplitComponent, OneSidebarComponent, OnePopupComponent, OneNavbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    OnePopupComponent, OneNavbarComponent, OneSidebarComponent, OneWindowSplitComponent,
  ],
})
export class AppModule { }
