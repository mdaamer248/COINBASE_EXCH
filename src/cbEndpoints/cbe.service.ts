import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from './auth.service';
import { ConvCurrencyDto } from './dto/convert.currency.dto';
import { DepositFromCBAccDto } from './dto/deposit.from.CBA.dto';
import { DepositFromPayMethodDto } from './dto/deposit.pay.method.dto';
import { GenAddrDto } from './dto/gen-address.dto';
import { WithdrawToPayMethodDto } from './dto/withdraw.pay.method.dto';
import { WithdrawToCBAccDto } from './dto/withdraw.to.cba.dto';

@Injectable()
export class CBEService {
  constructor(private authService: AuthService) {}

  async sendNetworkRequest(config: any) {
    const response = await axios(config)
      .then((response) => {
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  }

  async getAllAccsFromId() {
    const config = this.authService.authTheReq('/accounts/', 'GET', {});
    const accounts = await this.sendNetworkRequest(config);
    return accounts;
  }

  async getAccFromId(accountId: string) {
    const config = this.authService.authTheReq(
      `/accounts/${accountId}`,
      'GET',
      {},
    );
    const account = await this.sendNetworkRequest(config);
    return account;
  }

  async getAccHoldFromId(accountId: string) {
    const config = this.authService.authTheReq(
      `/accounts/${accountId}/holds/`,
      'GET',
      {},
    );
    const account = await this.sendNetworkRequest(config);
    return account;
  }

  async getAccLedgerFromId(accountId: string) {
    const config = this.authService.authTheReq(
      `/accounts/${accountId}/ledger/`,
      'GET',
      {},
    );
    const ledger = await this.sendNetworkRequest(config);
    return ledger;
  }

  async getAccTransferFromId(accountId: string) {
    const config = this.authService.authTheReq(
      `/accounts/${accountId}/transfers/`,
      'GET',
      {},
    );
    const transfers = await this.sendNetworkRequest(config);
    return transfers;
  }

  /// Address Book
  async getAddrsBook() {
    const config = this.authService.authTheReq('/address-book/', 'GET', {});
    const addrsBook = await this.sendNetworkRequest(config);
    return addrsBook;
  }

  /// Coinbase Accounts
  async getCBWallets() {
    const config = this.authService.authTheReq(
      '/coinbase-accounts/',
      'GET',
      {},
    );
    const accounts = await this.sendNetworkRequest(config);
    return accounts;
  }

  async generateAddress(genAddrDto: GenAddrDto) {
    const body = {
      account_id: genAddrDto.account_id,
      profile_id: genAddrDto.profile_id,
      network: genAddrDto.profile_id,
    };

    const config = this.authService.authTheReq(
      '/coinbase-accounts/',
      'GET',
      body,
    );
    const address = await this.sendNetworkRequest(config);
    return address;
  }

  /// Conversions
  async convertCurrencies(convertCurrency: ConvCurrencyDto) {
    const config = this.authService.authTheReq(
      '/conversions',
      'POST',
      convertCurrency,
    );
    const response = await this.sendNetworkRequest(config);
    return response;
  }

  /// Currencies
  async getAllCurrencies() {
    const config = this.authService.authTheReq('/currencies/', 'GET', {});
    const currencies = await this.sendNetworkRequest(config);
    return currencies;
  }

  async getOneCurrency(id: string) {
    const config = this.authService.authTheReq(`/currencies/${id}`, 'GET', {});
    const currency = await this.sendNetworkRequest(config);
    return currency;
  }

  /// Transfers
  async depositFromCBAcc(body: DepositFromCBAccDto) {
    const config = this.authService.authTheReq(
      `/deposits/coinbase-account/`,
      'POST',
      body,
    );
    const tsx = await this.sendNetworkRequest(config);
    return tsx;
  }

  async depositFromPayMethod(body: DepositFromPayMethodDto) {
    const config = this.authService.authTheReq(
      `/deposits/payment-method/`,
      'POST',
      body,
    );
    const tsx = await this.sendNetworkRequest(config);
    return tsx;
  }

  async getAllPayMethods() {
    const config = this.authService.authTheReq(`/payment-methods/`, 'GET', {});
    const methods = await this.sendNetworkRequest(config);
    return methods;
  }

  async getAllTransfers(
    profile_id?: string,
    before?: string,
    after?: string,
    limit?: number,
    type?: string,
  ) {
    const config = this.authService.authTheReq(
      `/transfers?profile_id=${profile_id}&before=${before}&after=${after}&limit=${limit}&type=${type}`,
      'GET',
      {},
    );
    const transfers = await this.sendNetworkRequest(config);
    return transfers;
  }

  async getSingleTransfer(id: string) {
    const config = this.authService.authTheReq(`/transfers/${id}/`, 'GET', {});
    const transfer = await this.sendNetworkRequest(config);
    return transfer;
  }

  async withdrawToCBAcc(body: WithdrawToCBAccDto) {
    const config = this.authService.authTheReq(
      `/withdrawals/coinbase-account/`,
      'POST',
      body,
    );
    const tsx = await this.sendNetworkRequest(config);
    return tsx;
  }

  async getFeeEstimate(
    currency: string,
    crypto_address: string,
    network: string,
  ) {
    const config = this.authService.authTheReq(
      `/withdrawals/fee-estimate?currency=${currency}&crypto_address=${crypto_address}&network=${network}`,
      'GET',
      {},
    );
    const fee = await this.sendNetworkRequest(config);
    return fee;
  }

  async withdrawToPayMethod(body: WithdrawToPayMethodDto) {
    const config = this.authService.authTheReq(
      `/withdrawals/payment-method/`,
      'POST',
      body,
    );
    const tsx = await this.sendNetworkRequest(config);
    return tsx;
  }



  /////////// Products
  async getAllTradingPairs(){
    const config = this.authService.authTheReq(`/products/`, 'GET', {});
    const pairs = await this.sendNetworkRequest(config);
    return pairs;
  }

  async getSingleProduct(id: string){
    const config = this.authService.authTheReq(`/products/${id}/`, 'GET', {});
    const product = await this.sendNetworkRequest(config);
    return product;
  }


  async getProductBook(id: string){
    const config = this.authService.authTheReq(`/products/${id}/book/`, 'GET', {});
    const book = await this.sendNetworkRequest(config);
    return book;
  }

  async getProductCandles(id: string){
    const config = this.authService.authTheReq(`/products/${id}/candles/`, 'GET', {});
    const candles = await this.sendNetworkRequest(config);
    return candles;
  }

  async getProductStats(id: string){
    const config = this.authService.authTheReq(`/products/${id}/stats/`, 'GET', {});
    const stats = await this.sendNetworkRequest(config);
    return stats;
  }

  async getProductTicker(id: string){
    const config = this.authService.authTheReq(`/products/${id}/ticker/`, 'GET', {});
    const ticker = await this.sendNetworkRequest(config);
    return ticker;
  }

  async getProductTrades(id: string){
    const config = this.authService.authTheReq(`/products/${id}/trades/`, 'GET', {});
    const trades = await this.sendNetworkRequest(config);
    return trades;
  }
  
}
