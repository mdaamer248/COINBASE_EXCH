import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WithdrawToCryptoAddrDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  profile_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  crypto_address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  destination_tag: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  no_destination_tag: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  two_factor_code: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  nonce: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  network: string;
}
