import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConvCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  profile_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  from: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  to: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nonce: string;
}
