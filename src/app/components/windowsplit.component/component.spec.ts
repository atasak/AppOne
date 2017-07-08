import {OneWindowComponent, OneWindowSplitComponent} from './component';
import {OneWindowSplitHost} from './host.mock';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

let host: OneWindowSplitHost;
let comp: OneWindowSplitComponent;
let fixture: ComponentFixture<OneWindowSplitHost>;

describe('FormComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OneWindowSplitHost, OneWindowSplitComponent, OneWindowComponent],
        })
            .compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(OneWindowSplitHost);
        host = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should work', ()=>{

    })
});
