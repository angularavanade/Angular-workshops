import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {
  filterForm = new FormGroup({
    name: new FormControl(''),
    minPlayingTime: new FormControl(''),
    maxPlayingTime: new FormControl(''),
    minAge: new FormControl(''),
    rate: new FormControl(''),
    minNumberOfPlayers: new FormControl(''),
    maxNumberOfPlayers: new FormControl(''),
    publisher: new FormControl('')
  });

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  filterBy(){
    this.filterService.setFilter(this.filterForm.value);
  }
}
