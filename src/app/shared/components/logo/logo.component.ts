import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/';

@Component({
  selector: 'logo-tag',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  // Properties
  logo: string;

  // Constructor
  constructor(private api: ApiService) { }

  // Lifecycle
  ngOnInit() {
    this.logo = this.api.strings.logo;
  }
}
