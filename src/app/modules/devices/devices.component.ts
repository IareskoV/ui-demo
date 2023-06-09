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
    this.devises = state.getAllWithPagination(this.page, this.elPerPage);
    this.pages = state.getPages(this.elPerPage);
  }

  ngOnInit(): void {}

  getPagesArray() {
    return Array.from({ length: this.pages }, (_, index) => index + 1);
  }

  setPage(page: number) {
    this.page = page;
    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }
  scrollPage(num: number) {
    this.page += num;
    if (this.page < 1) {
      this.page = 1;
    }
    if (this.page > this.pages) {
      this.page = this.pages;
    }

    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }

  onAmmountChange(event: any) {
    this.elPerPage = +event.target.value;
    this.devises = this.state.getAllWithPagination(this.page, this.elPerPage);
  }
}
