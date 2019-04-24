import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entries',
  templateUrl: './new-weight-entries.component.html',
  styleUrls: ['./new-weight-entries.component.css']
})
export class NewWeightEntriesComponent implements OnInit {

  @Input() showBodyFat: boolean; 
  @Output() create = new EventEmitter();
  model;

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  createNewEntry(){
    let newEntry = Object.assign({}, this.model,
      {
        bodyfat: this.model.bodyfat / 100,
        date: new Date(this.model.date)
      })

    this.create.emit(newEntry);
  }

  resetForm(){
    this.model = {};
  }

}
