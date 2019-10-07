import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes$;

  constructor(private dataService: DataService) { }

  ngOnInit() {

     this.homes$ = this.dataService.getHomes$();

  }

}
