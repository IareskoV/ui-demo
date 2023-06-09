import { Injectable } from '@angular/core';
import { device } from 'src/app/types/devise';
import { Device } from 'src/app/utils/device';
import data from '../../utils/devices.json';

@Injectable({
  providedIn: 'root',
})
/**
 * Represents a state service for managing devices.
 */
export class StateService {
  devices: Device[] = [];
  constructor() {
    // Initialize the devices array by creating Device objects from the data array
    data.forEach((el) => {
      this.devices.push(new Device(el));
    });
  }

  /**
   * Adds a new device to the devices array.
   * @param {device} el - The device object to add.
   */
  add(el: device) {
    this.devices.push(new Device(el));
  }

  /**
   * Deletes a device from the devices array based on its ID.
   * @param {number} id - The ID of the device to delete.
   */
  delete(id: number) {
    this.devices = this.devices.filter((el) => {
      el.id != id;
    });
  }

  /**
   * Updates an existing device in the devices array.
   * @param {Device} device - The updated device object.
   */
  update(device: Device) {
    let deviseToUpdate = this.devices.find((el) => el.id == device.id);
    if (deviseToUpdate) {
      let index = this.devices.indexOf(deviseToUpdate);
      this.devices[index] = device;
    }
  }

  /**
   * Retrieves a device from the devices array based on its ID.
   * @param {number} id - The ID of the device to retrieve.
   * @returns {Device | undefined} - The device object if found, undefined otherwise.
   */
  get(id: number) {
    return this.devices.find((el) => el.id == id);
  }

  /**
   * Retrieves a subset of devices from the devices array with pagination.
   * @param {number} page - The page number.
   * @param {number} amount - The number of devices per page.
   * @returns {Device[]} - The array of devices for the specified page.
   */
  getAllWithPagination(page: number = 1, ammount: number = 8) {
    console.log((page - 1) * ammount);
    return this.devices.slice((page - 1) * ammount, page * ammount);
  }
  /**
   * Calculates the number of pages needed for pagination based on the total number of devices.
   * @param {number} length - The number of devices per page.
   * @returns {number} - The total number of pages.
   */
  getPages(length: number = 8) {
    return Math.ceil(this.devices.length / length);
  }

  /**
   * Retrieves the name of a device based on its ID.
   * @param {number} id - The ID of the device.
   * @returns {string} - The name of the device or the ID if not found.
   */
  getDeviceNameById(id: number) {
    return this.devices.find((el) => el.id == id)?.name || `${id}`;
  }
}
