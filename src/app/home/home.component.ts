import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/';

@Component({
  selector: 'home-tag',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private banner: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.banner = this.api.strings.banner;
  }
}
