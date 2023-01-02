import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  profile_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  side: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  product_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  stp: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  stop: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  stop_price: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  price: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  size: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  funds: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  time_in_force: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cancel_after: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  post_only: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  client_oid: string;


}
