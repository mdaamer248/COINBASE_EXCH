import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAxiosDefaults } from 'axios';
import { CBEService } from './cbe.service';
import { CreateOrderDto } from './dto/create.order.dto';

@ApiTags('ORDERS')
@Controller('cbe/ orders')
export class OrdersController {
  constructor(private readonly cbeService: CBEService) {}

  @Get('/get-all-fills')
  async getAllFills() {
    const orders = await this.cbeService.getAllFills();
    return orders;
  }

  @Get('/get-all-orders')
  async getAllOrders() {
    const orders = await this.cbeService.getAllOrders();
    return orders;
  }

  @Delete('/cancel-all-orders')
  async cancelAllOrders(@Query('profile_id') profile_id: string, @Query('product_id') product_id: string) {
    const orders = await this.cbeService.cancelAllOrders(profile_id, product_id);
    return orders;
  }


  @Get('/get-single-order/:order_id')
  async getSingleOrder(@Param('order_id') id: string) {
    const orders = await this.cbeService.getSingleOrder(id);
    return orders;
  }


  @Delete('/cancel-single-order/:order_id')
  async cancelSingleOrder(@Param('order_id') id: string) {
    const orders = await this.cbeService.cancelSingleOrder(id);
    return orders;
  }

  @Post('/create-a-new-order')
  async createNewOrder(@Body() body: CreateOrderDto){
    const order = await this.cbeService.createNewOrder(body);
    return order;
  }


}
