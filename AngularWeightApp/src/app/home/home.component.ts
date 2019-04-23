import { Component, OnInit } from '@angular/core';
import {WeightEntriesService} from '../weight-entries.services';
import { Entry } from '../model/entry';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entries: Entry[];

  showBodyFat = true;

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.entriesSvc.GetEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  toggleBodyFat(){
    this.showBodyFat = !this.showBodyFat;
  }

  updateData() {
    this.entriesSvc.GetEntries().subscribe(entries => {
      this.entries = entries;
    })
  }
  
  createNewEntry(entry: Entry){
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.updateData();
    });
  }

}
