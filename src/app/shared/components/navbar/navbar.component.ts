import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
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
  constructor(
    private ref: ChangeDetectorRef,
    private json: JsonService) {}

  ngOnInit() {
    // Get JSON config
    this.json.getConfig().subscribe((config) => {
      this.data = config;
      // the following is required, otherwise the view will not be updated
      this.ref.detectChanges();
    }, this.onError);
  }

  // Event handlers
  private onError(error) {
    console.log(error);
  }
}
