import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    SideNavTogglerComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardsModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent,
    SideNavTogglerComponent,
    LayoutComponent,
    FooterComponent
  ]
})
export class WidgetsModule {}
