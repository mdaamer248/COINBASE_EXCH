import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';
import { ConvCurrencyDto } from './dto/convert.currency.dto';

@ApiTags('CONVERSIONS')
@Controller('cbe/conversion')
export class ConversionController {
  constructor(private readonly cbeService: CBEService) {}

  @Post('/convert-currency')
  async getAccountById(@Body() convCurrency: ConvCurrencyDto) {
    const res = await this.cbeService.convertCurrencies(convCurrency);
    return res;
  }
}