import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './authentication/auth.module';
import { SharedModule } from './shared/shared.module';
import { WidgetsModule } from "./widgets/widgets.module";

import { SideMenuItemService } from './services/side-menu-item.service';
import { SideNavService } from "./services/side-nav.service";

import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from "fusioncharts/fusioncharts.widgets";
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, Widgets);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    SharedModule,
    FusionChartsModule,
    WidgetsModule
  ],
  providers: [
    SideMenuItemService,
    SideNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
