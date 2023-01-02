import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const crypto = require('crypto');

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}
  authTheReq(endPoint: string, reqMethod: string, reqBody: any) {
    const cb_access_timestamp = Date.now() / 1000; // in ms
    const cb_access_passphrase = this.configService.get<string>(
      'CB_ACCESS_PASSPHRASE',
    );
    const secret = this.configService.get<string>('CB_ONETIME_SECRET');
    const requestPath = endPoint;
    const method = reqMethod;
    const body = reqBody;

    // create the prehash string by concatenating required parts
    const message =
      reqMethod == 'GET'
        ? cb_access_timestamp + method + requestPath
        : cb_access_timestamp + method + requestPath + body;


    const key = Buffer.from(secret, 'base64');
    const hmac = crypto.createHmac('sha256', key);
    const cb_access_sign = hmac.update(message).digest('base64');

    let config;
    if (reqMethod == 'GET') {
      config = {
        method: 'get',
        url: `https://api-public.sandbox.exchange.coinbase.com${endPoint}`,
        headers: {
          'cb-access-key': this.configService.get<string>('CB_ACCESS_KEY'),
          'cb-access-passphrase': cb_access_passphrase,
          'cb-access-sign': cb_access_sign,
          'cb-access-timestamp': cb_access_timestamp,
        },
      };
    } else {
      config = {
        method: 'post',
        url: `https://api-public.sandbox.exchange.coinbase.com${endPoint}`,
        headers: {
          'cb-access-key': this.configService.get<string>('CB_ACCESS_KEY'),
          'cb-access-passphrase': cb_access_passphrase,
          'cb-access-sign': cb_access_sign,
          'cb-access-timestamp': cb_access_timestamp,
        },
        data: body,
      };
    }

    return config;
  }
}
