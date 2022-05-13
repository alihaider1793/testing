import { Component, OnInit } from '@angular/core';
import Moralis from 'moralis';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;

  constructor() {}

  ngOnInit(): void {
    const serverUrl = 'https://giwvxockoygv.usemoralis.com:2053/server';
    const appId = 'fikxyv0hBpFqjNKJMVDNOU8uqUi2m8jxSuN8aypE';
    // const masterKey = '9TY6MjUokXm9pAiLO8vcvu3W4X5P5mXNO0gNvjAD';
    Moralis.start({ serverUrl, appId });
    console.log('it has been started');
  }

  async login() {
    console.log('loginworking');

    this.user = Moralis.User.current();
    // if (this.user == 'walletconnect') {
    //   this.user = await Moralis.authenticate({ provider: this.user });
    // } else {
    //   this.user = await Moralis.authenticate();
    // }

    if (!this.user) {
      
      Moralis.authenticate({
        provider: 'walletconnect',
        mobileLinks: [
          'metamask'
        ],
      })
        .then(function (user) {
          console.log('logged in user:', user);
          console.log(user.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  async logout() {
    await Moralis.User.logOut();
    console.log('logged out');
  }

}
