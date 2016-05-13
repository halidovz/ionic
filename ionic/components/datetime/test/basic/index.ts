import {App, Page} from '../../../../../ionic';


@Page({
  templateUrl: 'main.html'
})
class E2EPage {
  wwwInvented = '1989';
  time = '13:47';
  netscapeRelease = '1994-12-15T13:47:20.789';
  firefoxRelease = '2002-09-23T15:03:46.789';
  webkitOpenSourced = '2005-06-17T11:06Z';
  leapYearsSummerMonths = '';

  leapYearsArray = [2020, 2016, 2008, 2004, 2000, 1996];
}


@App({
  template: '<ion-nav [root]="root"></ion-nav>'
})
class E2EApp {
  root;

  constructor() {
    this.root = E2EPage;
  }
}
