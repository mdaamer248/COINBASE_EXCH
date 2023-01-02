import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CBEService } from './cbe.service';

@ApiTags('PRODUCTS')
@Controller('cbe/product')
export class ProductController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-all-trading-pairs')
  async getAllTradingPairs() {
    const pairs = await this.cbeService.getAllTradingPairs();
    return pairs;
  }

  @Get('/get-single-product/:product_id')
  async getSingleProduct(@Param('product_id') id: string)  {
    const pairs = await this.cbeService.getSingleProduct(id);
    return pairs;
  }

  @Get('/get-single-product-book/:product_id')
  async getProductBook(@Param('product_id') id: string)  {
    const book = await this.cbeService.getProductBook(id);
    return book;
  }

  @Get('/get-single-product-candles/:product_id')
  async getProductCandles(@Param('product_id') id: string)  {
    const candles = await this.cbeService.getProductCandles(id);
    return candles;
  }

  @Get('/get-single-product-stats/:product_id')
  async getProductStat(@Param('product_id') id: string)  {
    const stats = await this.cbeService.getProductStats(id);
    return stats;
  }

  @Get('/get-single-product-ticker/:product_id')
  async getProductTicker(@Param('product_id') id: string)  {
    const ticker = await this.cbeService.getProductTicker(id);
    return ticker;
  }

  @Get('/get-single-product-trades/:product_id')
  async getProductTrades(@Param('product_id') id: string)  {
    const trades = await this.cbeService.getProductTrades(id);
    return trades;
  }
}
