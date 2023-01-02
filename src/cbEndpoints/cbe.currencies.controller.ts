import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';

@ApiTags('CURRENCIES')
@Controller('cbe/currencies')
export class CurrenciesController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-all-known-currencies')
  async getCurrencies() {
    const currencies = await this.cbeService.getAllCurrencies();
    return currencies;
  }

  @Get('/get-single-currency/:id')
  async getSingleCurrency(@Param('id') id: string) {
    const currency = await this.cbeService.getOneCurrency(id);
    return currency;
  }
}
