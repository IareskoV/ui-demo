import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { StateService } from '../../servises/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private state: StateService) {}

  url: string = '';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setHeader(event.url);
        console.log('Route changed:', event.url);
      }
    });
  }

  /**
   * Sets the header URL by modifying the provided URL string.
   * @param {string} url - The URL to set as the header.
   */
  setHeader(url: string): void {
    let temp = url.split('/').filter((el) => el !== '');

    // If the second element (temp[1]) exists, get the device name by its ID
    if (temp[1]) {
      temp[1] = this.state.getDeviceNameById(+temp[1]);
    }

    this.url = temp.join(' → ');

    // If the updated URL is empty, set it to 'Home'
    if (this.url === '') {
      this.url = 'Home';
    }
  }
}
