import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistItemComponent } from './watchlist/watchlist-item/watchlist-item.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DailyReportComponent } from './daily-report/daily-report.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    WatchlistComponent,
    WatchlistItemComponent,
    DailyReportComponent
  ],
  imports: [
    BrowserModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
