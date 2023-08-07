import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../common/models';
import * as moment from 'moment';
import { DateFormats } from '../common/date';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() account: AccountModel | undefined

  ngOnInit(): void {
    this.updateNotificationBellTo('active')
  }

  getCurrentDate() {
    return moment(new Date()).format(DateFormats.DATE_BR)
  }

  updateNotificationBellTo(status: 'active' | 'disabled') {
    document.getElementById('account-section')!.className = `account-section notification-bell-${status}`
  }
}
