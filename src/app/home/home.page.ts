import { Component, OnInit } from '@angular/core';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import Moralis from 'moralis';
// import {} from '@walletconnect/web3-provider';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;

  constructor() {}

  async ngOnInit() {
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

    // let providerx='walletconnect'
    // let web3;
    // if (providerx == 'walletconnect') {
    //   const user = await Moralis.Web3.authenticate({ provider: 'walletconnect' });
    //   web3 = await Moralis.Web3.enableWeb3({ provider: 'walletconnect' });
    // } else {
    //   const user = await Moralis.Web3.authenticate();
    //   web3 = await Moralis.Web3.enableWeb3();
    // }

    // Moralis.isMetaMaskInstalled().then((res) => {
    //   console.log(res);
    // });

    await Moralis.Web3.enableWeb3();
    await Moralis.Web3.authenticate({
      provider: 'walletconnect',
      signingMessage: 'Login via Digital Dope',
    });

    // const polygonNFTs = await Moralis.Web3API.account.getNFTs({
    //   chain: 'rinkeby',
    //   address: '0x6Cc2990cA80e9a067d89dF630968A6aB95d94a0a',
    // });

    // console.log(polygonNFTs.result[0].metadata);

    // .then(function (user) {
    //   console.log('logged in user:', user);
    //   console.log(user.get('ethAddress'));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // await Moralis.Web3.enableWeb3({
    //   provider: 'walletconnect',
    // });
  }

  async logout() {
    await Moralis.User.logOut();
    console.log('logged out');
  }
}
