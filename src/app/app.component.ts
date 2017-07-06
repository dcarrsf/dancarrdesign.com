import { Component, OnInit } from '@angular/core';
import { ApiService, JsonService } from './shared/services/';

// External CSS
import '../style/app.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  data: object;

  constructor(private api: ApiService, private json: JsonService) {
    this.title = this.api.title;
  }

  ngOnInit() {
    this.json.getConfig().subscribe((d) => {
      console.log(d);
      this.data = d;
    });
  }
}
