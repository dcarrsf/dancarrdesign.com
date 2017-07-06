import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/';

// External CSS
import '../style/app.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Properties
  title: string;

  // Constructor
  constructor(private api: ApiService) {}

  // Initialize
  ngOnInit() {
    // Set title
    this.title = this.api.strings.title;
  }
}
