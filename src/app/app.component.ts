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
  title: string;
  data: ConfigVO[];

  constructor(private api: ApiService, private json: JsonService) {
    this.title = this.api.title;
  }

  ngOnInit() {
    this.json.getConfig().subscribe(this.onSuccess, this.onError);
  }

  private onSuccess(vos) {
    this.data = vos;
    console.log(this.data);
  }

  private onError(error) {
    console.log(error);
  }
}
