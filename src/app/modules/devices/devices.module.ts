import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';

import { DeviceComponent } from './device/device.component';
import { LightComponent } from './light/light.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [DevicesComponent, DeviceComponent, LightComponent],
  imports: [
    CommonModule,
    DevisesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TagInputModule,
  ],
})
export class DevicesModule {}
