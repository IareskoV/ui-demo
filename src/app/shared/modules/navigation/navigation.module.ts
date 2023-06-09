import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, NavigationLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
