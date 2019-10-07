import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {DataService} from '../services/dataservice.service';
import {of} from 'rxjs';
import {spyOnClass} from 'jasmine-es6-spies/dist';
import SpyObj = jasmine.SpyObj;

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let dataService: SpyObj<DataService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [{provide: DataService, useFactory: () => spyOnClass(DataService)}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    beforeEach(() => {

      dataService = TestBed.get(DataService);

      dataService.getHomes$.and.returnValue(of([
        {title: 'Home 1', image: 'Image 1', location: 'Gurgoan'},
        {title: 'Home 2', image: 'Image 2', location: 'Delhi'},
        {title: 'Home 3', image: 'Image 3', location: 'Noida'}
        ]));

      fixture.detectChanges();

    });

    it('should show home', () => {

        expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);

    });

    it('should show home info', () => {

        const home = fixture.nativeElement.querySelector('[data-test="home"]');

        expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');

        expect(home.querySelector('[data-test="image"]').innerText).toEqual('Image 1');

        expect(home.querySelector('[data-test="location"]').innerText).toEqual('Gurgoan');

    });
});
