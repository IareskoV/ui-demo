import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/servises/state.service';
import { Device } from 'src/app/utils/device';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  page = 1;
  elPerPage = 10;
  pages = 1;
  devises: Device[] = [];
  constructor(private state: StateService) {
    // Initialize the devices array with pagination and calculate the total number of pages
    this.devises = state.getAllWithPagination(this.page, this.elPerPage);
    this.pages = state.getPages(this.elPerPage);
  }

  ngOnInit(): void {}

  /**
   * Generates an array representing the available pages for pagination.
   * @returns {number[]} - The array of page numbers.
   */
  getPagesArray() {
    return Array.from({ length: this.pages }, (_, index) => index + 1);
  }

  /**
   * Sets the current page for pagination.
   * @param {number} page - The page number to set.
   */
  setPage(page: number) {
    this.page = page;
    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }

  /**
   * Scrolls to the previous or next page based on the specified number.
   * @param {number} num - The number to scroll the page by (-1 for previous, 1 for next).
   */
  scrollPage(num: number) {
    this.page += num;
    // Ensure the page is within valid bounds
    if (this.page < 1) {
      this.page = 1;
    }
    if (this.page > this.pages) {
      this.page = this.pages;
    }

    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }

  /**
   * Handles the event when the number of elements per page changes.
   * @param {any} event - The event object.
   */
  onAmmountChange(event: any) {
    this.elPerPage = +event.target.value;
    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }
}
