import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { type } from 'os';
import { CBEService } from './cbe.service';
import { DepositFromCBAccDto } from './dto/deposit.from.CBA.dto';
import { DepositFromPayMethodDto } from './dto/deposit.pay.method.dto';
import { WithdrawToPayMethodDto } from './dto/withdraw.pay.method.dto';
import { WithdrawToCBAccDto } from './dto/withdraw.to.cba.dto';

@ApiTags('TRANSFERS')
@Controller('cbe/transfers')
export class TransferController {
  constructor(private readonly cbeService: CBEService) {}

  @Post('/deposit-from-cb-account')
  async depositFromCBAcc(@Body() body: DepositFromCBAccDto) {
    const tsx = await this.cbeService.depositFromCBAcc(body);
    return tsx;
  }

  @Post('/deposit-from-payment-method')
  async depositFromPayMethod(@Body() body: DepositFromPayMethodDto) {
    const tsx = await this.cbeService.depositFromPayMethod(body);
    return tsx;
  }

  @Get('/get-all-payment-methods')
  async getAllPaymentMethods() {
    const methods = await this.cbeService.getAllPayMethods();
    return methods;
  }

  @Get('/get-all-transfers')
  async getAllTransfers(
    @Query('profile_id') profile_id: string,
    @Query('before') before: string,
    @Query('after') after: string,
    @Query('limit') limit: number,
    @Query('type') type: string,
  ) {
    const transfers = await this.cbeService.getAllTransfers(
      profile_id,
      before,
      after,
      limit,
      type,
    );
    return transfers;
  }

  @Get('/get-a-single-transfer/:transfer_id')
  async getSingleTransfer(@Param('transfer_id') id: string) {
    const transfer = await this.cbeService.getSingleTransfer(id);
    return transfer;
  }

  @Post('/withdraw-to-CB-account')
  async withdrawToCBAcc(@Body() body: WithdrawToCBAccDto) {
    const tsx = await this.cbeService.withdrawToCBAcc(body);
    return tsx;
  }

  @Post('/withdraw-to-crypto-address')
  async withdrawToCryptoAddress(@Body() body: WithdrawToCBAccDto) {
    const tsx = await this.cbeService.withdrawToCBAcc(body);
    return tsx;
  }

  @Get('/get-fee-estimate-for-crypto-withdrawl')
  async getFeeEstimate(
    @Query('currency') currency: string,
    @Query('crypto_address') crypto_address: string,
    @Query('network') network: string,
  ) {
    const fee = await this.cbeService.getFeeEstimate(currency, crypto_address, network);
    return fee;
  }

  @Post('/withdraw-to-payment-method')
  async withdrawToPayMethod(@Body() body: WithdrawToPayMethodDto) {
    const tsx = await this.cbeService.withdrawToPayMethod(body);
    return tsx;
  }
}
