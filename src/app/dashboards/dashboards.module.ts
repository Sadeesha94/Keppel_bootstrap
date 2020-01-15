import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { PlantDashboardComponent } from './plant-dashboard/plant-dashboard.component';


@NgModule({
  declarations: [
    PlantDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ],
  exports: [
    PlantDashboardComponent
  ]
})
export class DashboardsModule {}
