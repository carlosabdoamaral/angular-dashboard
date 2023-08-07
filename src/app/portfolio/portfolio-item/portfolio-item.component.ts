import { Component, Input, OnInit } from '@angular/core';
import { StockModel } from '../../common/models';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() stock: StockModel | undefined

  ngOnInit(): void {

  }
}
