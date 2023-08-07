import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../common/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() account: AccountModel | undefined

  ngOnInit(): void {}
}
