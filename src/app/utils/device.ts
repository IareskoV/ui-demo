import { device } from '../types/devise';

let counter = 1;

export class Device {
  id: number;
  name: string;
  tags: string[];
  description: string;

  constructor(obj: device) {
    this.id = counter;
    counter++;
    (this.name = obj.name),
      (this.tags = obj.tags),
      (this.description = obj.description);
  }
}
