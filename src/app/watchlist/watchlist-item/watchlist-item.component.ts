import { Component, Input, OnInit } from '@angular/core';
import { StockModel } from '../../common/models';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.scss']
})
export class WatchlistItemComponent implements OnInit {
  @Input() stock: StockModel | undefined

  ngOnInit(): void {

  }
}
