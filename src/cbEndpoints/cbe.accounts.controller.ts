import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';

@ApiTags('TRADING ACCOUNTS')
@Controller('cbe')
export class AccController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-all-accounts-of-profile-from-api-key')
  async getAllAccounts() {
    const accounts = await this.cbeService.getAllAccsFromId();
    return accounts;
  }

  @Get('/get-account-by-id/:accountId')
  async getAccountById(@Param('accountId') accountId: string) {
    const accounts = await this.cbeService.getAccFromId(accountId);
    return accounts;
  }

  @Get('/get-account-holds/:accountId')
  async getAccountsHoldById(@Param('accountId') accountId: string) {
    const accounts = await this.cbeService.getAccHoldFromId(accountId);
    return accounts;
  }

  @Get('/get-account-ledger/:accountId')
  async getAccountsLedgerById(@Param('accountId') accountId: string) {
    const holds = await this.cbeService.getAccLedgerFromId(accountId);
    return holds;
  }

  @Get('/get-account-transfers/:accountId')
  async getAccountsTransferById(@Param('accountId') accountId: string) {
    const transfers = await this.cbeService.getAccTransferFromId(accountId);
    return transfers;
  }
}
