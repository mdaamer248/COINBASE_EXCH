import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';

@ApiTags('ADDRESS BOOK')
@Controller('cbe/address-book')
export class AddrsController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-address-book')
  async getAccountById() {
    const addrBook = await this.cbeService.getAddrsBook();
    return addrBook;
  }
}
