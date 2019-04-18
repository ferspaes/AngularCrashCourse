import { Component } from '@angular/core';
import { WeightEntriesService } from './weight-entries.services';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(public entriesSvc: WeightEntriesService) {}

  ngOnInit() {
  }
  
}
