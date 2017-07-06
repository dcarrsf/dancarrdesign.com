import { Component, OnInit } from '@angular/core';
import { ApiService, JsonService } from './shared/services/';
import { ConfigVO } from './shared/models/config/config.model';

// External CSS
import '../style/app.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Properties
  data: ConfigVO[];
  title: string;

  // Constructor
  constructor(
    private api: ApiService,
    private json: JsonService) {}

  // Initialize
  ngOnInit() {
    console.log(this.api);
    // Set title
    this.title = this.api.strings.title;
    // Get JSON config
    this.json.getConfig().subscribe(this.onSuccess, this.onError);
  }

  // Event handlers
  private onSuccess(vos) {
    this.data = vos;
  }

  private onError(error) {
    console.log(error);
  }
}
