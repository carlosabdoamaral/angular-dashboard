import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../common/models';
import { CanvasJSChart } from '@canvasjs/angular-charts';


@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})

export class DailyReportComponent implements OnInit {
  @Input() account: AccountModel | undefined
  chartOptions: Object = {}

  ngOnInit(): void {
    if (!!this.account) {
      this.chartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        data: [{
          type: "spline",
          xValueFormatString: "DD/MM/YYYY",
          dataPoints: this.account.dailyReportList
        }],
        axisX: {
          lineColor: "#FFF"
        },
        axisY: {
          gridColor: "#FFF0"
        },

        theme: "dark1",
        backgroundColor: "#0007",
      }
    }
  }

}
