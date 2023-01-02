import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';
import { GenAddrDto } from './dto/gen-address.dto';

@ApiTags('COINBASE ACCOUNTS')
@Controller('cbe/address-book')
export class CBAccsController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-all-coinbase-wallets')
  async getCoinBaseWallets() {
    const accounts = await this.cbeService.getCBWallets();
    return accounts;
  }

  @Post('/generate-OT-crypto-addr')
  async generateAddress(@Body() genAddrDto: GenAddrDto) {
    const address = await this.cbeService.generateAddress(genAddrDto);
    return address;
  }
}
