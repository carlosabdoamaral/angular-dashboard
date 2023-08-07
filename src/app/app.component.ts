import { Component } from '@angular/core';
import { AccountModel } from './common/models';
import { accountMock } from './common/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  accountMock: AccountModel = accountMock;
}
