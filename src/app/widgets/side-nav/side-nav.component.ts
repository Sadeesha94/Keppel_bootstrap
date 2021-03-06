import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  constructor(public sideNavService: SideNavService) {}

  ngOnInit() {}

  toggle() {
    this.sideNavService.toggleSideNav();
  }
}
