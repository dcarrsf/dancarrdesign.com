import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../shared/services/';
import { ConfigVO } from '../../../shared/models/config/config.model';

@Component({
  selector: 'navbar-tag',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Properties
  data: ConfigVO[];

  // Constructor
  constructor(private json: JsonService) {}

  ngOnInit() {
    // Get JSON config
    this.json.getConfig().subscribe(this.onSuccess, this.onError);
  }

  // Event handlers
  private onSuccess(vos) {
    this.data = vos;
    console.log(vos);
  }

  private onError(error) {
    console.log(error);
  }
}
