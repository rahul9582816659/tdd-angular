import {TestBed} from '@angular/core/testing';

import {DataService} from './dataservice.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('DataService', () => {
    let http: HttpClient;
    let dataService: DataService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    }));

    it('should get homes', () => {

        // spy on and mock http client
        http = TestBed.get(HttpClient);

        const mockedHomes = [
            {title: 'Home 1', image: 'Image 1', location: 'Gurgoan'},
            {title: 'Home 2', image: 'Image 2', location: 'Delhi'},
            {title: 'Home 3', image: 'Image 3', location: 'Noida'}
        ];

        spyOn(http, 'get').and.returnValue(of(mockedHomes));


        // use our service to get homes
        dataService = TestBed.get(DataService);
        const spy = jasmine.createSpy('spy');
        dataService.getHomes$().subscribe(spy);

        // verify that service return mocked data
        expect(spy).toHaveBeenCalledWith(mockedHomes);

        // verify that service will call the proper http endpoint
        expect(http.get).toHaveBeenCalledWith('assets/homes.json');
    });
});
