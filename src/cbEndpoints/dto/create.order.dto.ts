import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  @IsOptional()
  @ApiProperty()
  stop: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  stop_price: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  price: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  size: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  @ApiProperty()
  client_oid: string;


}
