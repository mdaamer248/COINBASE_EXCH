import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccController } from './cbe.accounts.controller';
import { AddrsController } from './cbe.addrbook.controller';
import { CBAccsController } from './cbe.cbaccounts.controller';
import { ConversionController } from './cbe.conversion.controller';
import { CurrenciesController } from './cbe.currencies.controller';
import { OrdersController } from './cbe.orders.controller';
import { ProductController } from './cbe.products.controller';
import { CBEService } from './cbe.service';
import { TransferController } from './cbe.transfers.controller';

@Module({
  imports: [],
  controllers: [AccController, AddrsController, CBAccsController, ConversionController, CurrenciesController, TransferController, ProductController, OrdersController],
  providers: [CBEService, AuthService],
})
export class CBEModule {}
