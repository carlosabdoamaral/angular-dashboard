import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../common/models';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  @Input() account: AccountModel | undefined

  ngOnInit(): void {

  }
}
