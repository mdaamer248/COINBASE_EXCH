import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class WithdrawToCBAccDto {
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
  coinbase_account_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currency: string;
}
